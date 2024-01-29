import {Game_I} from './state'
import { GameActions_T, ActionType_E } from "./actions";



export function TicTacReducer(state:Game_I, action: GameActions_T){ 
  switch (action.type) {
    case ActionType_E.ChengeGame:
      return {
        ...state,
        currentGame: action.payload,
      };

    case ActionType_E.TuggleMarker:
      return {
        ...state,
        typeMarker: !state.typeMarker,
      };

    case ActionType_E.SetMarker:
      return {
        ...state,
        typeMarker: action.payload,
      };

    case ActionType_E.SetMarkerItem:
      return {
        ...state,
        sells: action.payload,
      };

    case ActionType_E.ChangeScope:
      return {
        ...state,
        scope: action.payload,
      };

    case ActionType_E.SetWinnerCombinatios:
      return {
        ...state,
        winnerCombination: action.payload,
      };

    case ActionType_E.ChengeMode:
      return {
        ...state,
        modeGame: action.payload,
      };

    case ActionType_E.TuggleModalWindow:
      return {
        ...state,
        modalWindow: action.payload,
      };

    case ActionType_E.ChangeMenuLink:
      return {
        ...state,
        menuLink: action.payload,
      };
    case ActionType_E.SetnoWinner:
      return {
        ...state,
        noWinner: action.payload,
      };

    case ActionType_E.SetLastWinner:
      return {
        ...state,
        lastWinner: action.payload,
      };
    
    case ActionType_E.PlayerNumber:
      return {
        ...state,
        playerNumber: action.payload,
      };
    
    case ActionType_E.StatusGameInteractive:
      return {
        ...state,
        optionsOneToOne: {
          ...state.optionsOneToOne,
          gameStatus: action.payload,
        }
      };
    
    case ActionType_E.SetPlayerOneName:
      return {
        ...state,
        optionsOneToOne: {
          ...state.optionsOneToOne,
          playerOneName: action.payload,
        },
      };
    
    case ActionType_E.SetPlayerTwoName:
      return {
        ...state,
        optionsOneToOne: {
          ...state.optionsOneToOne,
          playerTwoName: action.payload,
        },
      };

    
    default:
      return state;

  }
}