import React from 'react';

const GameDetails = (props) => {

  const {
    awayNickname,
    awayQ1,
    awayQ2,
    awayQ3,
    awayQ4,
    awayScore,
    homeNickname,
    homeQ1,
    homeQ2,
    homeQ3,
    homeQ4,
    homeScore
  } = props;

  return(
    <div className="game-details">
      <table className="box-score">
        <thead>
          <tr>
            <th></th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th>Q4</th>
            <th>Final</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{awayNickname}</th>
            <td>{awayQ1}</td>
            <td>{awayQ2}</td>
            <td>{awayQ3}</td>
            <td>{awayQ4}</td>
            <th>{awayScore}</th>
          </tr>
          <tr>
            <th>{homeNickname}</th>
            <td>{homeQ1}</td>
            <td>{homeQ2}</td>
            <td>{homeQ3}</td>
            <td>{homeQ4}</td>
            <th>{homeScore}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GameDetails;
