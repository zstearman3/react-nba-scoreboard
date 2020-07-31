import React from 'react';
import Data from './data';
import Game from './Game';

function App() {
  return (
    <div className="App">
      {Data.games.map( (game, index) =>
        <Game
          awayTeam={game.awayTeam.name}
          homeTeam={game.homeTeam.name}
        />
      )}
    </div>
  );
}

export default App;
