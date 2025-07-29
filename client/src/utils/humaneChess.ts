import { Chess } from 'chess.js'

export class HumaneChessGame {
  private chess: Chess
  private isRunning: boolean = false
  private onMoveCallback?: (moveInfo: MoveInfo) => void
  private onGameOverCallback?: (gameResult: GameResult) => void

  constructor() {
    this.chess = new Chess()
  }

  // Function to get a random delay between 1-6 seconds
  private getRandomDelay(): number {
    return Math.floor(Math.random() * 6000) + 1000 // 1000-6000ms (1-6 seconds)
  }

  // Set callbacks for move and game over events
  public onMove(callback: (moveInfo: MoveInfo) => void): void {
    this.onMoveCallback = callback
  }

  public onGameOver(callback: (gameResult: GameResult) => void): void {
    this.onGameOverCallback = callback
  }

  // Start the humane chess simulation
  public async start(): Promise<void> {
    this.isRunning = true
    console.log('🎮 Starting a humane chess game simulation...')
    console.log('⏰ Moves will be played with 1-6 second intervals\n')
    
    await this.makeMove()
  }

  // Stop the simulation
  public stop(): void {
    this.isRunning = false
  }

  // Reset the game
  public reset(): void {
    this.chess.reset()
    this.isRunning = false
  }

  // Get current game state
  public getGameState(): GameState {
    return {
      fen: this.chess.fen(),
      pgn: this.chess.pgn(),
      isGameOver: this.chess.isGameOver(),
      turn: this.chess.turn(),
      history: this.chess.history(),
      inCheck: this.chess.inCheck()
    }
  }

  // Main move-making function
  private async makeMove(): Promise<void> {
    if (!this.isRunning || this.chess.isGameOver()) {
      const gameResult: GameResult = {
        pgn: this.chess.pgn(),
        isCheckmate: this.chess.isCheckmate(),
        isDraw: this.chess.isDraw(),
        isStalemate: this.chess.isStalemate(),
        winner: this.chess.isCheckmate() 
          ? (this.chess.turn() === 'w' ? 'black' : 'white')
          : null
      }

      console.log('\n🎯 Game Over!')
      console.log('📋 Final PGN:')
      console.log(this.chess.pgn())
      
      if (this.chess.isCheckmate()) {
        console.log('🏆 Checkmate!')
      } else if (this.chess.isDraw()) {
        console.log('🤝 Draw!')
      } else if (this.chess.isStalemate()) {
        console.log('😐 Stalemate!')
      }

      this.onGameOverCallback?.(gameResult)
      return
    }

    const moves = this.chess.moves()
    const move = moves[Math.floor(Math.random() * moves.length)]
    
    // Show current position info
    const moveNumber = Math.ceil(this.chess.history().length / 2) + 1
    const currentPlayer = this.chess.turn() === 'w' ? 'White' : 'Black'
    
    console.log(`\n🤔 ${currentPlayer} is thinking... (Move ${moveNumber})`)
    
    // Random thinking time between 1-6 seconds
    const delay = this.getRandomDelay()
    console.log(`⏱️  Thinking for ${(delay/1000).toFixed(1)} seconds...`)
    
    await new Promise(resolve => setTimeout(resolve, delay))
    
    if (!this.isRunning) return // Check if stopped during delay
    
    // Make the move
    const moveResult = this.chess.move(move)
    console.log(`♟️  ${currentPlayer} plays: ${move}`)
    
    // Show if there's check
    if (this.chess.inCheck()) {
      console.log('⚠️  Check!')
    }

    // Call move callback
    const moveInfo: MoveInfo = {
      move: moveResult!,
      moveNumber,
      player: currentPlayer.toLowerCase() as 'white' | 'black',
      thinkingTime: delay,
      isCheck: this.chess.inCheck(),
      fen: this.chess.fen()
    }
    
    this.onMoveCallback?.(moveInfo)
    
    // Continue with next move after a small pause
    setTimeout(() => this.makeMove(), 500)
  }
}

// Type definitions
export interface MoveInfo {
  move: any // chess.js move object
  moveNumber: number
  player: 'white' | 'black'
  thinkingTime: number
  isCheck: boolean
  fen: string
}

export interface GameResult {
  pgn: string
  isCheckmate: boolean
  isDraw: boolean
  isStalemate: boolean
  winner: 'white' | 'black' | null
}

export interface GameState {
  fen: string
  pgn: string
  isGameOver: boolean
  turn: 'w' | 'b'
  history: string[]
  inCheck: boolean
}

// Simple usage function for quick testing
export async function runHumaneChessSimulation(): Promise<void> {
  const game = new HumaneChessGame()
  
  game.onMove((moveInfo) => {
    // You can add custom logic here for each move
  })
  
  game.onGameOver((result) => {
    console.log('🎮 Game simulation completed!')
  })
  
  await game.start()
}