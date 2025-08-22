import {useState} from 'react';
import * as engine from '../lib/chess/engine';
import type {Square,Move} from 'chess.js'

export default function useChessGame(){
    const [board,setBoard]=useState(engine.getBoard());
    const [fen,setFen]=useState(engine.getFen());
    const [pgn,setPgn]=useState(engine.getPgn());

    const makeMove=(from:Square ,to: Square) :Move|null=>{
        const move=engine.makeMove(from,to)
        if(move){
            setBoard(engine.getBoard());
            setFen(engine.getFen());
            setPgn(engine.getPgn());
        }
        return move;
    }
    const resetGame=()=>{
        engine.resetGame();
        setBoard(engine.getBoard());
        setFen(engine.getFen());
        setPgn(engine.getPgn());
    }
    return {board,fen,pgn,makeMove,resetGame}
}