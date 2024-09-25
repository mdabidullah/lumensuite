import { getPointsFromBoundsWithRotation, rotatePoints, } from '@lumensuite/global/utils';
import { getFontFacesByFontFamily, wrapFontFamily, } from '../../../utils/font.js';
const getMeasureCtx = (function initMeasureContext() {
    let ctx = null;
    let canvas = null;
    return () => {
        if (!canvas) {
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');
        }
        return ctx;
    };
})();
const textMeasureCache = new Map();
export function measureTextInDOM(fontFamily, fontSize, fontWeight) {
    const cacheKey = `${wrapFontFamily(fontFamily)}-${fontWeight}`;
    if (textMeasureCache.has(cacheKey)) {
        const { fontSize: cacheFontSize, lineGap, lineHeight, } = textMeasureCache.get(cacheKey);
        return {
            lineHeight: lineHeight * (fontSize / cacheFontSize),
            lineGap: lineGap * (fontSize / cacheFontSize),
        };
    }
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.append(span);
    span.innerText = 'x';
    div.style.position = 'absolute';
    div.style.top = '0px';
    div.style.left = '0px';
    div.style.visibility = 'hidden';
    div.style.fontFamily = wrapFontFamily(fontFamily);
    div.style.fontWeight = fontWeight;
    div.style.fontSize = `${fontSize}px`;
    div.style.pointerEvents = 'none';
    document.body.append(div);
    const lineHeight = span.getBoundingClientRect().height;
    const height = div.getBoundingClientRect().height;
    const result = {
        lineHeight,
        lineGap: height - lineHeight,
    };
    div.remove();
    textMeasureCache.set(cacheKey, {
        ...result,
        fontSize,
    });
    return result;
}
export function getFontString({ fontStyle, fontWeight, fontSize, fontFamily, }) {
    const lineHeight = getLineHeight(fontFamily, fontSize, fontWeight);
    return `${fontStyle} ${fontWeight} ${fontSize}px/${lineHeight}px ${wrapFontFamily(fontFamily)}, sans-serif`.trim();
}
export function getLineHeight(fontFamily, fontSize, fontWeight) {
    const { lineHeight } = measureTextInDOM(fontFamily, fontSize, fontWeight);
    return lineHeight;
}
const metricsCache = new Map();
export function getFontMetrics(fontFamily, fontSize, fontWeight) {
    const ctx = getMeasureCtx();
    const cacheKey = `${wrapFontFamily(fontFamily)}-${fontWeight}`;
    if (metricsCache.has(cacheKey)) {
        const { fontSize: cacheFontSize, metrics } = metricsCache.get(cacheKey);
        return Object.keys(Object.getPrototypeOf(metrics)).reduce((acc, key) => {
            acc[key] =
                metrics[key] * (fontSize / cacheFontSize);
            return acc;
        }, {});
    }
    const font = `${fontWeight} ${fontSize}px ${wrapFontFamily(fontFamily)}`;
    ctx.font = font;
    const metrics = ctx.measureText('x');
    // check if font does not fallback
    if (ctx.font === font) {
        metricsCache.set(cacheKey, {
            fontSize,
            metrics,
        });
    }
    return metrics;
}
function transformDelta(delta) {
    const result = [];
    let tmpString = delta.insert;
    while (tmpString.length > 0) {
        const index = tmpString.indexOf('\n');
        if (index === -1) {
            result.push({
                insert: tmpString,
                attributes: delta.attributes,
            });
            break;
        }
        if (tmpString.slice(0, index).length > 0) {
            result.push({
                insert: tmpString.slice(0, index),
                attributes: delta.attributes,
            });
        }
        result.push('\n');
        tmpString = tmpString.slice(index + 1);
    }
    return result;
}
/**
 * convert a delta insert array to chunks, each chunk is a line
 */
export function deltaInsertsToChunks(delta) {
    if (delta.length === 0) {
        return [[]];
    }
    const transformedDelta = delta.flatMap(transformDelta);
    function* chunksGenerator(arr) {
        let start = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '\n') {
                const chunk = arr.slice(start, i);
                start = i + 1;
                yield chunk;
            }
            else if (i === arr.length - 1) {
                yield arr.slice(start);
            }
        }
        if (arr.at(-1) === '\n') {
            yield [];
        }
    }
    return Array.from(chunksGenerator(transformedDelta));
}
const RS_LTR_CHARS = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' +
    '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF';
const RS_RTL_CHARS = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';
// eslint-disable-next-line no-misleading-character-class
const RE_RTL_CHECK = new RegExp(`^[^${RS_LTR_CHARS}]*[${RS_RTL_CHARS}]`);
export function isRTL(text) {
    return RE_RTL_CHECK.test(text);
}
export function normalizeText(text) {
    return (text
        // replace tabs with spaces so they render and measure correctly
        .replace(/\t/g, '        ')
        // normalize newlines
        .replace(/\r?\n|\r/g, '\n'));
}
export function splitIntoLines(text) {
    return normalizeText(text).split('\n');
}
export function getLineWidth(text, font) {
    const ctx = getMeasureCtx();
    if (font !== ctx.font)
        ctx.font = font;
    const width = ctx.measureText(text).width;
    return width;
}
export function getTextWidth(text, font) {
    const lines = splitIntoLines(text);
    let width = 0;
    lines.forEach(line => {
        width = Math.max(width, getLineWidth(line, font));
    });
    return width;
}
export function wrapTextDeltas(text, font, w) {
    const deltas = text.toDelta().flatMap(delta => ({
        insert: wrapText(delta.insert, font, w),
        attributes: delta.attributes,
    }));
    return deltas;
}
export const charWidth = (() => {
    const cachedCharWidth = {};
    const calculate = (char, font) => {
        const ascii = char.charCodeAt(0);
        if (!cachedCharWidth[font]) {
            cachedCharWidth[font] = [];
        }
        if (!cachedCharWidth[font][ascii]) {
            const width = getLineWidth(char, font);
            cachedCharWidth[font][ascii] = width;
        }
        return cachedCharWidth[font][ascii];
    };
    const getCache = (font) => {
        return cachedCharWidth[font];
    };
    return {
        calculate,
        getCache,
    };
})();
export function parseTokens(text) {
    // Splitting words containing "-" as those are treated as separate words
    // by css wrapping algorithm eg non-profit => non-, profit
    const words = text.split('-');
    if (words.length > 1) {
        // non-proft org => ['non-', 'profit org']
        words.forEach((word, index) => {
            if (index !== words.length - 1) {
                words[index] = word += '-';
            }
        });
    }
    // Joining the words with space and splitting them again with space to get the
    // final list of tokens
    // ['non-', 'profit org'] =>,'non- proft org' => ['non-','profit','org']
    return words.join(' ').split(' ');
}
export function wrapText(text, font, maxWidth) {
    // if maxWidth is not finite or NaN which can happen in case of bugs in
    // computation, we need to make sure we don't continue as we'll end up
    // in an infinite loop
    if (!Number.isFinite(maxWidth) || maxWidth < 0) {
        return text;
    }
    const lines = [];
    const originalLines = text.split('\n');
    const spaceWidth = getLineWidth(' ', font);
    let currentLine = '';
    let currentLineWidthTillNow = 0;
    const push = (str) => {
        if (str.trim()) {
            lines.push(str);
        }
    };
    const resetParams = () => {
        currentLine = '';
        currentLineWidthTillNow = 0;
    };
    originalLines.forEach(originalLine => {
        const currentLineWidth = getTextWidth(originalLine, font);
        // Push the line if its <= maxWidth
        if (currentLineWidth <= maxWidth) {
            lines.push(originalLine);
            return; // continue
        }
        const words = parseTokens(originalLine);
        resetParams();
        let index = 0;
        while (index < words.length) {
            const currentWordWidth = getLineWidth(words[index], font);
            // This will only happen when single word takes entire width
            if (currentWordWidth === maxWidth) {
                push(words[index]);
                index++;
            }
            // Start breaking longer words exceeding max width
            else if (currentWordWidth > maxWidth) {
                // push current line since the current word exceeds the max width
                // so will be appended in next line
                push(currentLine);
                resetParams();
                while (words[index].length > 0) {
                    const currentChar = String.fromCodePoint(words[index].codePointAt(0));
                    const width = charWidth.calculate(currentChar, font);
                    currentLineWidthTillNow += width;
                    words[index] = words[index].slice(currentChar.length);
                    if (currentLineWidthTillNow >= maxWidth) {
                        push(currentLine);
                        currentLine = currentChar;
                        currentLineWidthTillNow = width;
                    }
                    else {
                        currentLine += currentChar;
                    }
                }
                // push current line if appending space exceeds max width
                if (currentLineWidthTillNow + spaceWidth >= maxWidth) {
                    push(currentLine);
                    resetParams();
                    // space needs to be appended before next word
                    // as currentLine contains chars which couldn't be appended
                    // to previous line unless the line ends with hyphen to sync
                    // with css word-wrap
                }
                else if (!currentLine.endsWith('-')) {
                    currentLine += ' ';
                    currentLineWidthTillNow += spaceWidth;
                }
                index++;
            }
            else {
                // Start appending words in a line till max width reached
                while (currentLineWidthTillNow < maxWidth && index < words.length) {
                    const word = words[index];
                    currentLineWidthTillNow = getLineWidth(currentLine + word, font);
                    if (currentLineWidthTillNow > maxWidth) {
                        push(currentLine);
                        resetParams();
                        break;
                    }
                    index++;
                    // if word ends with "-" then we don't need to add space
                    // to sync with css word-wrap
                    const shouldAppendSpace = !word.endsWith('-');
                    currentLine += word;
                    if (shouldAppendSpace) {
                        currentLine += ' ';
                    }
                    // Push the word if appending space exceeds max width
                    if (currentLineWidthTillNow + spaceWidth >= maxWidth) {
                        if (shouldAppendSpace) {
                            lines.push(currentLine.slice(0, -1));
                        }
                        else {
                            lines.push(currentLine);
                        }
                        resetParams();
                        break;
                    }
                }
            }
        }
        if (currentLine.slice(-1) === ' ') {
            // only remove last trailing space which we have added when joining words
            currentLine = currentLine.slice(0, -1);
            push(currentLine);
        }
    });
    return lines.join('\n');
}
export const truncateTextByWidth = (text, font, width) => {
    let totalWidth = 0;
    let i = 0;
    for (; i < text.length; i++) {
        const char = text[i];
        totalWidth += charWidth.calculate(char, font);
        if (totalWidth > width) {
            break;
        }
    }
    return text.slice(0, i);
};
export function getTextCursorPosition(model, coord) {
    const leftTop = getPointsFromBoundsWithRotation(model)[0];
    const mousePos = rotatePoints([[coord.x, coord.y]], leftTop, -model.rotate)[0];
    return [
        Math.floor((mousePos[1] - leftTop[1]) /
            getLineHeight(model.fontFamily, model.fontSize, model.fontWeight)),
        mousePos[0] - leftTop[0],
    ];
}
export function getCursorByCoord(model, coord) {
    const [lineIndex, offsetX] = getTextCursorPosition(model, coord);
    const font = getFontString(model);
    const deltas = wrapTextDeltas(model.text, font, model.w);
    const lines = deltaInsertsToChunks(deltas).map(line => line.map(iTextDelta => iTextDelta.insert).join(''));
    const string = lines[lineIndex];
    let index = lines.slice(0, lineIndex).join('').length - 1;
    let currentStringWidth = 0;
    let charIndex = 0;
    while (currentStringWidth < offsetX) {
        index += 1;
        if (charIndex === string.length) {
            break;
        }
        currentStringWidth += charWidth.calculate(string[charIndex], font);
        charIndex += 1;
    }
    return index;
}
export function normalizeTextBound({ yText, fontStyle, fontWeight, fontSize, fontFamily, hasMaxWidth, maxWidth, }, bound, dragging = false) {
    if (!yText)
        return bound;
    const lineHeightPx = getLineHeight(fontFamily, fontSize, fontWeight);
    const font = getFontString({
        fontStyle,
        fontWeight,
        fontSize,
        fontFamily,
    });
    let lines = [];
    const deltas = yText.toDelta();
    const text = yText.toString();
    const widestCharWidth = [...text]
        .map(char => getTextWidth(char, font))
        .sort((a, b) => a - b)
        .pop() ?? getTextWidth('W', font);
    if (bound.w < widestCharWidth) {
        bound.w = widestCharWidth;
    }
    const width = bound.w;
    const insertDeltas = deltas.flatMap(delta => ({
        insert: wrapText(delta.insert, font, width),
        attributes: delta.attributes,
    }));
    lines = deltaInsertsToChunks(insertDeltas);
    if (!dragging) {
        lines = deltaInsertsToChunks(deltas);
        const widestLineWidth = Math.max(...text.split('\n').map(line => getTextWidth(line, font)));
        bound.w = widestLineWidth;
        if (hasMaxWidth && maxWidth && maxWidth > 0) {
            bound.w = Math.min(bound.w, maxWidth);
        }
    }
    bound.h = lineHeightPx * lines.length;
    return bound;
}
export function isFontWeightSupported(fontFamily, weight) {
    const fontFaces = getFontFacesByFontFamily(fontFamily);
    const fontFace = fontFaces.find(fontFace => fontFace.weight === weight);
    return !!fontFace;
}
export function isFontStyleSupported(fontFamily, style) {
    const fontFaces = getFontFacesByFontFamily(fontFamily);
    const fontFace = fontFaces.find(fontFace => fontFace.style === style);
    return !!fontFace;
}
//# sourceMappingURL=utils.js.map