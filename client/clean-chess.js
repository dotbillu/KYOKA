import { Chess } from 'chess.js'

const chess = new Chess()

function getRandomDelay() {
  return Math.floor(Math.random() * 5000) + 2000 // 2000-6000ms (2-6 seconds)
}

async function makeMove() {
  if (chess.isGameOver()) {
    console.log(chess.pgn())
    return
  }

  const moves = chess.moves()
  const move = moves[Math.floor(Math.random() * moves.length)]
  
  const delay = getRandomDelay()
  await new Promise(resolve => setTimeout(resolve, delay))
  
  chess.move(move)
  
  setTimeout(makeMove, 100)
}

makeMove()