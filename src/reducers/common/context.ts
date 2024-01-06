import React from "react";
import { CommonActions_T } from './actions'
import { Common_I, initialCommon } from './state'


interface Context_I {
  state: Common_I;
  dispatch: React.Dispatch<CommonActions_T>; 
}

export const CommonContext = React.createContext<Context_I>({
  state: initialCommon,
  dispatch: () => undefined,
});