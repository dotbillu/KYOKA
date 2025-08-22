import {Chessboard} from 'react-chessboard';
import useChessGame from '../../hooks/useChessGame';
import {useState,useCallback} from 'react';

export default()=>{
  const {fen,makeMove}=useChessGame();
  const [selectedSquare,setSelectedSquare]=useState<string|null>(null);
  const onPieceDrop=useCallback(
    ({sourceSquare,targetSquare}:{sourceSquare:string,targetSquare:string|null})=>{
      return makeMove(sourceSquare as any,targetSquare as any)!==null;
    },[makeMove]);
  
    const onSquareClick=useCallback(
      ({square}:{square:string})=>{
        if(!selectedSquare)setSelectedSquare(square);
        else{
          makeMove(selectedSquare as any,square as any);
          setSelectedSquare(null);
        }
      },[selectedSquare,makeMove]
    );
    const chessBoardOptions={
      position:fen,
      onPieceDrop,
      onSquareClick,
      boardStyle:{width:'550px'},
      animationDuration:2000,
      allowDragging:true,
    }
    return (
      <div className="flex justify-start">
      <Chessboard options={chessBoardOptions}/>
      </div>
    )

}