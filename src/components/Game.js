import React, { PureComponent } from 'react';
import GameHeader from './GameHeader.js';
import GameDetails from './GameDetails.js';

class Game extends PureComponent {

  state = {
    isExpanded: false
  }

  handleExpand = () => {
    this.setState( prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  render() {
    let details;
    const {
      awayTeam,
      awayNickname,
      awayScore,
      homeTeam,
      homeNickname,
      homeScore,
      awayQ1,
      awayQ2,
      awayQ3,
      awayQ4,
      homeQ1,
      homeQ2,
      homeQ3,
      homeQ4,
      location,
      tipTime,
    } = this.props;

    if (this.state.isExpanded) {
      details = <GameDetails
        awayNickname={awayNickname}
        homeNickname={homeNickname}
        awayScore={awayScore}
        homeScore={homeScore}
        awayQ1={awayQ1}
        awayQ2={awayQ2}
        awayQ3={awayQ3}
        awayQ4={awayQ4}
        homeQ1={homeQ1}
        homeQ2={homeQ2}
        homeQ3={homeQ3}
        homeQ4={homeQ4}
        location={location}
        tipTime={tipTime}
      />
    }

    return (
      <div className="game">
        <GameHeader
          awayTeam={awayTeam}
          awayNickname={awayNickname}
          awayScore={awayScore}
          homeNickname={homeNickname}
          homeTeam={homeTeam}
          homeScore={homeScore}
          isExpanded={this.state.isExpanded}
          handleExpand={this.handleExpand}
        />
        {details}
      </div>
    );
  }
}

export default Game;
