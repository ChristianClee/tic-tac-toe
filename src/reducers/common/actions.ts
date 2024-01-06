export enum ActionCommon_E {
  TuggleBurger
}

export interface TuggleBurger_I {
  type: ActionCommon_E.TuggleBurger;
}

export type CommonActions_T = TuggleBurger_I
