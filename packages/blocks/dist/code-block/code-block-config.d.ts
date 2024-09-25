import type { BundledLanguageInfo, ThemeInput } from 'shiki';
export interface CodeBlockConfig {
    theme?: {
        dark?: ThemeInput;
        light?: ThemeInput;
    };
    langs?: BundledLanguageInfo[];
}
declare global {
    namespace LumenSuite {
        interface BlockConfigs {
            'affine:code': CodeBlockConfig;
        }
    }
}
//# sourceMappingURL=code-block-config.d.ts.map