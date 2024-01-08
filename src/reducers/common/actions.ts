import { Light_dark_themes_E } from "#constants/common-base/constNames";

export enum ActionCommon_E {
  TuggleBurger,
  TuggleLightDarkThemes,
}

export interface TuggleBurger_I {
  type: ActionCommon_E.TuggleBurger;
}

export interface TuggleLightDarkThemes_I {
  type: ActionCommon_E.TuggleLightDarkThemes;
  payload: Light_dark_themes_E;
}

export type CommonActions_T = TuggleBurger_I | TuggleLightDarkThemes_I;
