const testResult = {
    success: true,
    messages: [],
};
let testCases = [];
function reportTestResult() {
    const event = new CustomEvent('test-result', {
        detail: testResult,
    });
    window.dispatchEvent(event);
}
function addMessage(message) {
    console.log(message);
    testResult.messages.push(message);
}
function reject(message) {
    testResult.success = false;
    addMessage(`❌ ${message}`);
}
export function testSerial(name, callback) {
    testCases.push({ name, callback });
}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function runOnce() {
    await wait(50); // for correct event sequence
    for (const testCase of testCases) {
        const { name, callback } = testCase;
        const result = await callback();
        if (result)
            addMessage(`✅ ${name}`);
        else
            reject(name);
    }
    reportTestResult();
    testCases = [];
}
// XXX: workaround typing issue in blobs/__tests__/test-entry.ts
export function assertExists(val) {
    if (val === null || val === undefined) {
        throw new Error('val does not exist');
    }
}
export async function nextFrame() {
    return new Promise(resolve => requestAnimationFrame(resolve));
}
// Test image source: https://en.wikipedia.org/wiki/Test_card
export async function loadTestImageBlob(name) {
    const resp = await fetch(`/${name}.png`);
    return resp.blob();
}
export async function loadImage(blobUrl) {
    const img = new Image();
    img.src = blobUrl;
    return new Promise(resolve => {
        img.onload = () => resolve(img);
    });
}
export function assertColor(img, x, y, color) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(x, y, 1, 1).data;
    const r = data[0];
    const g = data[1];
    const b = data[2];
    return r === color[0] && g === color[1] && b === color[2];
}
// prevent redundant test runs
export function disableButtonsAfterClick() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(button => {
                button.disabled = true;
            });
        });
    });
}
//# sourceMappingURL=test-utils-dom.js.map