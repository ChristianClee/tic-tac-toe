import {Game_I} from './state'
import { GameActions_T, ActionType_E } from "./actions";



export function TicTacReducer(state:Game_I, action: GameActions_T){ 
  switch (action.type) {
    case ActionType_E.ChengeGame:
      return {
        ...state,
        currentGame: action.payload.currentGame,
        sells: action.payload.sells,
      };
    
    case ActionType_E.SetMarker:
      return {
        ...state,
        typeMarker: !state.typeMarker
      };
    
    case ActionType_E.SetMarkerItem: 
      return {
        ...state,
        sells: action.payload,
      };
    
    case ActionType_E.ChangeScope:
      return {
        ...state,
        scope: action.payload
      };
    
    case ActionType_E.SetWinnerCombinatios:
      return {
        ...state,
        winnerCombination: action.payload
      };
    
  
    
    default:
      return state
  }
}