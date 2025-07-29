import { useState, useEffect, useRef } from 'react';
import { Chessboard } from 'react-chessboard';
import { ChessAnimation } from './moveAnimations';

export default function HomeBoard() {
  const [position, setPosition] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  const chessAnimationRef = useRef<ChessAnimation | null>(null);

  useEffect(() => {
    chessAnimationRef.current = new ChessAnimation(setPosition);
    chessAnimationRef.current.startAnimation(500); // move every 0.5s

    return () => {
      if (chessAnimationRef.current) {
        chessAnimationRef.current.stopAnimation();
      }
    };
  }, []);

  return (
    <div className="flex justify-center p-10">
      <div className="w-1/2">
        <Chessboard options={{ position }} />
      </div>
    </div>
  );
}
