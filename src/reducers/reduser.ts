import {Game_I} from './state'
import { GameActions_T, ActionType_E } from "./actions";



export function TicTacReducer(state:Game_I, action: GameActions_T){ 
  switch (action.type) {
    case ActionType_E.ChengeGame:
      return {
        ...state,
        currentGame: action.payload.currentGame,
        countSells: action.payload.countSells,
      };
    
    case ActionType_E.SetMarker:
      return {
        ...state,
        typeMarker: !state.typeMarker
      };
    
    default:
      return state
  }
}