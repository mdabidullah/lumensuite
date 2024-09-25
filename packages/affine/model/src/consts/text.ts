import { createEnumMap } from '../utils/enum.js';

export enum ColorScheme {
  Dark = 'dark',
  Light = 'light',
}

export type Color = string | { [K in ColorScheme | 'normal']?: string };

export enum TextAlign {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}

export const TextAlignMap = createEnumMap(TextAlign);

export enum TextVerticalAlign {
  Bottom = 'bottom',
  Center = 'center',
  Top = 'top',
}

export type TextStyleProps = {
  color: Color;
  fontFamily: FontFamily;
  fontSize: number;
  fontStyle: FontStyle;
  fontWeight: FontWeight;
  textAlign: TextAlign;
};

export enum FontWeight {
  Bold = '700',
  Light = '300',
  Medium = '500',
  Regular = '400',
  SemiBold = '600',
}

export const FontWeightMap = createEnumMap(FontWeight);

export enum FontStyle {
  Italic = 'italic',
  Normal = 'normal',
}

export enum FontFamily {
  BebasNeue = 'lumensuite:surface:BebasNeue',
  Inter = 'lumensuite:surface:Inter',
  Kalam = 'lumensuite:surface:Kalam',
  Lora = 'lumensuite:surface:Lora',
  OrelegaOne = 'lumensuite:surface:OrelegaOne',
  Poppins = 'lumensuite:surface:Poppins',
  Satoshi = 'lumensuite:surface:Satoshi',
}

export const FontFamilyMap = createEnumMap(FontFamily);

export const FontFamilyList = Object.entries(FontFamilyMap) as {
  [K in FontFamily]: [K, (typeof FontFamilyMap)[K]];
}[FontFamily][];

export enum TextResizing {
  AUTO_WIDTH,
  AUTO_HEIGHT,
}
