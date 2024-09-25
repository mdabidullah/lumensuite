import { WidgetViewMapIdentifier } from '../identifier.js';
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
export function WidgetViewMapExtension(flavour, widgetViewMap) {
    return {
        setup: di => {
            di.addImpl(WidgetViewMapIdentifier(flavour), () => widgetViewMap);
        },
    };
}
//# sourceMappingURL=widget-view-map.js.map