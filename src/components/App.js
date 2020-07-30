import React from 'react';
import Data from './data';
import Game from './Game';

function App() {
  return (
    <div className="App">
      {Data.games.map( (game, index) =>
        <Game
          awayTeam={game.vTeam.triCode}
          homeTeam={game.hTeam.triCode}
          seasonYear={game.seasonYear}
        />
      )}
    </div>
  );
}

export default App;
