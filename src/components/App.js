import React, { Component } from 'react';
import Data from './data';
import PageHeader from './PageHeader'
import Game from './Game';

class App extends Component{
  state = {
      favoriteTeam: "",
      teams: []
  };

  setFavoriteTeam = (team) => {
    this.setState({favoriteTeam: team});
  };

  componentDidMount() {
    let teams = [];

    for(let i=0; i<Data.games.length; i++) {
      teams.push(Data.games[i]["awayTeam"]["nickname"]);
      teams.push(Data.games[i]["homeTeam"]["nickname"]);
    }

    teams = teams.sort();
    this.setState({
      teams: teams
    });
  }

  render () {

    return (
      <div className="App">
        <PageHeader
          date={Data.date}
          teams={this.state.teams}
          setFavoriteTeam={this.setFavoriteTeam}
        />
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
            location={game.location}
            tipTime={game.tipTimeEastern}
            favoriteGame={(this.state.favoriteTeam === game.homeTeam.nickname) || (this.state.favoriteTeam === game.awayTeam.nickname)}
          />
        )}
      </div>
    );
  }
}

export default App;
