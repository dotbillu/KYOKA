import {Chessboard} from 'react-chessboard';
import  useChessGame  from '../hooks/useChessGame'
import {useState,useCallback} from 'react';

export default ()=>{
  const { fen, makeMove, resetGame } = useChessGame();
  const [selectedSquare,setSelectedSquare]=useState<string | null>(null);

  const onPieceDrop=useCallback(({ sourceSquare, targetSquare }: { sourceSquare: string; targetSquare: string | null })=>{
    if (!targetSquare) return false;
    const move=makeMove(sourceSquare as any, targetSquare as any);
    return move!==null;
  },[makeMove])

  const onSquareClick=useCallback(({ square }: { square: string })=>{
    if(!selectedSquare){
        setSelectedSquare(square)
    }else{
      makeMove(selectedSquare as any ,square as any);
      setSelectedSquare(null);
    }
  },[selectedSquare,makeMove])

  const chessBoardOptions={
    position:fen,
    onPieceDrop,
    onSquareClick,
    boardStyle: { width: '500px' },
    animationDurationInMs:200,
    allowDragging:true,
  }
  return(
    <div>
    <Chessboard options={chessBoardOptions}/>
    <button onClick={resetGame} >
      Reset Game
    </button>
    </div>
  )
}