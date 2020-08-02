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
        <svg height="40" width="40">
          <polygon points="20,0 8,40 40,16 0,16 32,40" />
        </svg>
        <div className="away-team-div">
          <h3 className="away-team"><strong>{awayTeam}</strong> {awayNickname}</h3>
          <h4>{awayScore}</h4>
        </div>
        <div className="home-team-div">
          <h3 className="home-team"><strong>{homeTeam}</strong> {homeNickname}</h3>
          <h4>{homeScore}</h4>
        </div>
        <button className="expand-button" onClick={() => handleExpand()}>
          {isExpanded ? "Hide Details" : "Show Details"}
        </button>
      </div>
    );
  }
}

export default GameHeader;
