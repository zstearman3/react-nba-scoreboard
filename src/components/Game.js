import React, { PureComponent } from 'react';
import GameHeader from './GameHeader.js';

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
    if (this.state.isExpanded) {
      details = "Some Details";
    }

    const {
      awayTeam,
      awayNickname,
      awayScore,
      homeTeam,
      homeNickname,
      homeScore,
    } = this.props;
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
