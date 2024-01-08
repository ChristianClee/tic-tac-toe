// import {} from './state'
import { Common_I } from './state';
import { CommonActions_T,ActionCommon_E } from './actions'

export function CommonReduser(state: Common_I, action: CommonActions_T) {
  switch (action.type) {
    case ActionCommon_E.TuggleBurger:
      return {
        ...state,
        burgerState: !state.burgerState,
      };

    case ActionCommon_E.TuggleLightDarkThemes:
      return {
        ...state,
        lightDarkTheme: action.payload,
      };

    default:
      return state;
  }
}