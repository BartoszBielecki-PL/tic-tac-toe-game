import React from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName='Player 1' playerSymbol='X' />
          <Player initialName='Player 2' playerSymbol='O' />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  )
}

export default App
