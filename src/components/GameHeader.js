import React, { PureComponent } from 'react';

class GameHeader extends PureComponent {
  render() {
    const {
      awayTeam,
      awayNickname,
      awayScore,
      homeTeam,
      homeNickname,
      homeScore,
      handleExpand,
      isExpanded
    } = this.props;
    return (
      <div className="game-headline">
        <h3 className="away-team"><strong>{awayTeam}</strong> {awayNickname}</h3>
        <h4>{awayScore}</h4>
        <h3 className="home-team"><strong>{homeTeam}</strong> {homeNickname}</h3>
        <h4>{homeScore}</h4>
        <button className="expand-button" onClick={() => handleExpand()}>
          {isExpanded ? "Hide Details" : "Show Details"}
        </button>
      </div>
    );
  }
}

export default GameHeader;
