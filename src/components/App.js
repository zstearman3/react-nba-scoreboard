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
          awayQ1={game.awayTeam.q1}
          awayQ2={game.awayTeam.q2}
          awayQ3={game.awayTeam.q3}
          awayQ4={game.awayTeam.q4}
          homeQ1={game.homeTeam.q1}
          homeQ2={game.homeTeam.q2}
          homeQ3={game.homeTeam.q3}
          homeQ4={game.homeTeam.q4}
          key={index}
          index={index}
        />
      )}
    </div>
  );
}

export default App;
