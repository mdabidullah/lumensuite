/** Tools for exporting files to device. For example, via browser download. */
export declare const FileExporter: {
    /**
     * Create a download for the user's browser.
     *
     * @param filename
     * @param text
     * @param mimeType like `"text/plain"`, `"text/html"`, `"application/javascript"`, etc. See {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types mdn docs List of MIME types}.
     *
     * @remarks
     * Only accepts data in utf-8 encoding (html files, javascript source, text files, etc).
     *
     * @example
     * const todoMDText = `# Todo items
     * [ ] Item 1
     * [ ] Item 2
     * `
     * FileExporter.exportFile("Todo list.md", todoMDText, "text/plain")
     *
     * @example
     * const stateJsonContent = JSON.stringify({ a: 1, b: 2, c: 3 })
     * FileExporter.exportFile("state.json", jsonContent, "application/json")
     */
    exportFile(filename: string, dataURL: string): void;
    exportPng(docTitle: string | undefined, dataURL: string): void;
};
//# sourceMappingURL=file-exporter.d.ts.map