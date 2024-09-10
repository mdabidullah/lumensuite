import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
function inlineTextStyles(props) {
    let textDecorations = '';
    if (props.underline) {
        textDecorations += 'underline';
    }
    if (props.strike) {
        textDecorations += ' line-through';
    }
    let inlineCodeStyle = {};
    if (props.code) {
        inlineCodeStyle = {
            'font-family': '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
            'line-height': 'normal',
            background: 'rgba(135,131,120,0.15)',
            color: '#EB5757',
            'border-radius': '3px',
            'font-size': '85%',
            padding: '0.2em 0.4em',
        };
    }
    return styleMap({
        'font-weight': props.bold ? 'bold' : 'normal',
        'font-style': props.italic ? 'italic' : 'normal',
        'text-decoration': textDecorations.length > 0 ? textDecorations : 'none',
        ...inlineCodeStyle,
    });
}
export const getDefaultAttributeRenderer = () => ({ delta }) => {
    const style = delta.attributes
        ? inlineTextStyles(delta.attributes)
        : styleMap({});
    return html `<span style=${style}
      ><v-text .str=${delta.insert}></v-text
    ></span>`;
};
//# sourceMappingURL=attribute-renderer.js.map