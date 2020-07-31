import React from 'react';
import Data from './data';
import Game from './Game';

function App() {
  return (
    <div className="App">
      {Data.games.map( (game, index) =>
        <Game
          awayTeam={game.awayTeam.name}
          awayNickname={game.awayTeam.nickname}
          awayScore={game.awayTeam.score}
          homeTeam={game.homeTeam.name}
          homeNickname={game.homeTeam.nickname}
          homeScore={game.homeTeam.score}
          key={index}
          index={index}
        />
      )}
    </div>
  );
}

export default App;
