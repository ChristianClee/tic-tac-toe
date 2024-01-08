import { Light_dark_themes_E } from "#constants/common-base/constNames";

export class Utilit {
  static getThemes(str: Light_dark_themes_E): Light_dark_themes_E {
    if (str === Light_dark_themes_E.DARK) {
      return Light_dark_themes_E.LIGHT;
    } else {
      return Light_dark_themes_E.DARK;
    }
  }
}
