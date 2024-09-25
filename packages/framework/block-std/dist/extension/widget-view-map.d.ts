import type { WidgetViewMapType } from '../spec/type.js';
import type { ExtensionType } from './extension.js';
/**
 * Create a widget view map extension.
 *
 * @param flavour The flavour of the block that the widget view map is for.
 * @param widgetViewMap A map of widget names to widget view lit literal.
 *
 * A widget view map is to provide a map of widgets to a block.
 * For every target block, it's view will be rendered with the widget views.
 *
 * @example
 * ```ts
 * import { WidgetViewMapExtension } from '@lumensuite/block-std';
 *
 * const MyWidgetViewMapExtension = WidgetViewMapExtension('my-flavour', {
 *  'my-widget': literal`my-widget-view`
 * });
 */
export declare function WidgetViewMapExtension(flavour: LumenSuite.Flavour, widgetViewMap: WidgetViewMapType): ExtensionType;
//# sourceMappingURL=widget-view-map.d.ts.map