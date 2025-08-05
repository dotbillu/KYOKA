import {Chess} from 'chess.js'
import type {Move,Square} from 'chess.js'

const game =new Chess()

export const makeMove = (from: Square, to: Square): Move | null => {
  return game.move({ from, to, promotion: 'q'}) ?? null
}



export const getBoard=()=>game.board();
export const getFen=()=> game.fen();
export const resetGame=()=>game.reset()