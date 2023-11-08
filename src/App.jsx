import React, { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectedSquare = (rowIndex, colIndex) => {

    setGameTurns(previousTurns => {
      const currentPlayer = deriveActivePlayer(previousTurns);

      const updatedPreviousTurns = [{ square: { row: rowIndex, column: colIndex }, player: currentPlayer }, ...previousTurns];

      return updatedPreviousTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName='Player 1' playerSymbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Player 2' playerSymbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectedSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
