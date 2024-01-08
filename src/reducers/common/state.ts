import { Light_dark_themes_E } from "#constants/common-base/constNames";

export interface Common_I {
  burgerState: boolean;
  lightDarkTheme: Light_dark_themes_E;
}

export const initialCommon: Common_I = {
  burgerState: false,
  lightDarkTheme: Light_dark_themes_E.LIGHT,
};
