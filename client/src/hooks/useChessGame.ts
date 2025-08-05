import {useState} from 'react';
import * as engine from '../lib/chess/engine.ts';
import type {Square} from 'chess.js';

export default ()=>{
    const [board,setBoard]=useState(engine.getBoard());
    const [fen,setFen]=useState(engine.getFen());

    const makeMove=(from:Square,to:Square)=>{
        const move=engine.makeMove(from,to)
        if(move){
            setBoard(engine.getBoard())
            setFen(engine.getFen())
        }
        return move;
        
    }
    const resetGame=()=>{
        engine.resetGame();
        setBoard(engine.getBoard());
        setFen(engine.getFen());
    }
    return{
        board,fen,makeMove,resetGame
    }
}