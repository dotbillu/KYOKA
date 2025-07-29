import { Chess } from 'chess.js'

const chess = new Chess()

// Function to get a random delay between 1-6 seconds
function getRandomDelay() {
  return Math.floor(Math.random() * 6000) + 1000 // 1000-6000ms (1-6 seconds)
}

// Function to simulate thinking time and make a move
async function makeMove() {
  if (chess.isGameOver()) {
    console.log('\n🎯 Game Over!')
    console.log('📋 Final PGN:')
    console.log(chess.pgn())
    
    if (chess.isCheckmate()) {
      console.log('🏆 Checkmate!')
    } else if (chess.isDraw()) {
      console.log('🤝 Draw!')
    } else if (chess.isStalemate()) {
      console.log('😐 Stalemate!')
    }
    
    return
  }

  const moves = chess.moves()
  const move = moves[Math.floor(Math.random() * moves.length)]
  
  // Show current position info
  const moveNumber = Math.ceil(chess.history().length / 2) + 1
  const currentPlayer = chess.turn() === 'w' ? 'White' : 'Black'
  
  console.log(`\n���� ${currentPlayer} is thinking... (Move ${moveNumber})`)
  
  // Random thinking time between 1-6 seconds
  const delay = getRandomDelay()
  console.log(`⏱️  Thinking for ${(delay/1000).toFixed(1)} seconds...`)
  
  await new Promise(resolve => setTimeout(resolve, delay))
  
  // Make the move
  chess.move(move)
  console.log(`♟️  ${currentPlayer} plays: ${move}`)
  
  // Show if there's check
  if (chess.inCheck()) {
    console.log('⚠️  Check!')
  }
  
  // Continue with next move
  setTimeout(makeMove, 500) // Small pause before next move
}

console.log('🎮 Starting a humane chess game simulation...')
console.log('⏰ Moves will be played with 1-6 second intervals\n')

// Start the game
makeMove()