import { Chess } from 'chess.js';

export class ChessAnimation {
  private chess: Chess;
  private onPositionChange: (fen: string) => void;
  private interval: NodeJS.Timeout | null = null;

  constructor(onPositionChange: (fen: string) => void) {
    this.chess = new Chess();
    this.onPositionChange = onPositionChange;
  }

  startAnimation(intervalMs: number = 5000) {
    this.interval = setInterval(() => {
      const moves = this.chess.moves();

      if (this.chess.isGameOver() || moves.length === 0) {
        this.stopAnimation();
      } else {
        this.chess.move(moves[Math.floor(Math.random() * moves.length)]);
        this.onPositionChange(this.chess.fen());
      }
    }, intervalMs);
  }

  stopAnimation() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  getCurrentPosition(): string {
    return this.chess.fen();
  }

  isGameOver(): boolean {
    return this.chess.isGameOver();
  }

  getPgn(): string {
    return this.chess.pgn();
  }

  reset() {
    this.chess.reset();
    this.onPositionChange(this.chess.fen());
  }
}