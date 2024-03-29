import { Light_dark_themes_E } from "#constants/common-base/constNames";

export enum ActionCommon_E {
  TuggleBurger,
  CloseBurger,
  TuggleLightDarkThemes,
  TuggleModalWindow,
}

export interface TuggleBurger_I {
  type: ActionCommon_E.TuggleBurger;
}
export interface CloseBurger_I {
  type: ActionCommon_E.CloseBurger;
}

export interface TuggleLightDarkThemes_I {
  type: ActionCommon_E.TuggleLightDarkThemes;
  payload: Light_dark_themes_E;
}

export interface TuggleModalWindow_I {
  type: ActionCommon_E.TuggleModalWindow;
}

export type CommonActions_T =
  | TuggleBurger_I
  | CloseBurger_I
  | TuggleLightDarkThemes_I
  | TuggleModalWindow_I
