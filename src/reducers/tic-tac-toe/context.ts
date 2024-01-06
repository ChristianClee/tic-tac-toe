import React from "react"
import { GameActions_T } from './actions'
import { Game_I, initialGameState } from './state'



interface Context_I {
  state: Game_I;
  dispatch: React.Dispatch<GameActions_T>;
}

export const GameContext = React.createContext<Context_I>({
  state: initialGameState,
  dispatch: () => undefined,
});