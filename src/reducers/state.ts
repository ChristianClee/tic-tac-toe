//this workin belong to Ilya Mishkov, I make english comments for training my writing skills it is reason why do I do this

import { Utilits } from '#commonUtilits/utilits'

export interface Sell_I {
  key: string; // it is unique value that was generated via Math.random module
  index: number // it shows current possition that counting from left to right and top to down
  type: boolean | null; // it shows who will be owner of the this sell, true it will be <cross> false it'll be <zerro>, the null means that till no one is owner 
}


export interface Mode_I {
  currentGame: number; // it shows current mode of game, at this moment the aviable modes are 3 to 3 sells, 4 to 4, 5 to 5 
  sells: Sell_I[];
}
export interface Game_I extends Mode_I {
  typeMarker: boolean; // it shows who must to make move, true means <cross> false means <zerro>
}



export const initialGameState: Game_I = {
  currentGame: 0,
  sells: Utilits.getSellsArr(9),
  typeMarker: true,
};