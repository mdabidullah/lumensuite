import { createEnumMap } from '../utils/enum.js';
export var ColorScheme;
(function (ColorScheme) {
    ColorScheme["Dark"] = "dark";
    ColorScheme["Light"] = "light";
})(ColorScheme || (ColorScheme = {}));
export var TextAlign;
(function (TextAlign) {
    TextAlign["Center"] = "center";
    TextAlign["Left"] = "left";
    TextAlign["Right"] = "right";
})(TextAlign || (TextAlign = {}));
export const TextAlignMap = createEnumMap(TextAlign);
export var TextVerticalAlign;
(function (TextVerticalAlign) {
    TextVerticalAlign["Bottom"] = "bottom";
    TextVerticalAlign["Center"] = "center";
    TextVerticalAlign["Top"] = "top";
})(TextVerticalAlign || (TextVerticalAlign = {}));
export var FontWeight;
(function (FontWeight) {
    FontWeight["Bold"] = "700";
    FontWeight["Light"] = "300";
    FontWeight["Medium"] = "500";
    FontWeight["Regular"] = "400";
    FontWeight["SemiBold"] = "600";
})(FontWeight || (FontWeight = {}));
export const FontWeightMap = createEnumMap(FontWeight);
export var FontStyle;
(function (FontStyle) {
    FontStyle["Italic"] = "italic";
    FontStyle["Normal"] = "normal";
})(FontStyle || (FontStyle = {}));
export var FontFamily;
(function (FontFamily) {
    FontFamily["BebasNeue"] = "blocksuite:surface:BebasNeue";
    FontFamily["Inter"] = "blocksuite:surface:Inter";
    FontFamily["Kalam"] = "blocksuite:surface:Kalam";
    FontFamily["Lora"] = "blocksuite:surface:Lora";
    FontFamily["OrelegaOne"] = "blocksuite:surface:OrelegaOne";
    FontFamily["Poppins"] = "blocksuite:surface:Poppins";
    FontFamily["Satoshi"] = "blocksuite:surface:Satoshi";
})(FontFamily || (FontFamily = {}));
export const FontFamilyMap = createEnumMap(FontFamily);
export const FontFamilyList = Object.entries(FontFamilyMap);
export var TextResizing;
(function (TextResizing) {
    TextResizing[TextResizing["AUTO_WIDTH"] = 0] = "AUTO_WIDTH";
    TextResizing[TextResizing["AUTO_HEIGHT"] = 1] = "AUTO_HEIGHT";
})(TextResizing || (TextResizing = {}));
//# sourceMappingURL=text.js.map