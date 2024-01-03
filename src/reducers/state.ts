export interface Mode_I {
  currentGame: number;
  countSells: number;
}

export interface Game_I extends Mode_I {
  typeMarker: boolean;
  
}


export const initialGameState: Game_I = {
  currentGame: 0,
  countSells: 9,
  typeMarker: true,
};