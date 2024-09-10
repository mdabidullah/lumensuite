export function isInsidePageEditor(host) {
    return Array.from(host.children).some(v => v.tagName.toLowerCase() === 'affine-page-root');
}
export function isInsideEdgelessEditor(host) {
    return Array.from(host.children).some(v => v.tagName.toLowerCase() === 'affine-edgeless-root');
}
//# sourceMappingURL=checker.js.map