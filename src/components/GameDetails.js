import React from 'react';

const GameDetails = (props) => {

  return(
    <div className="game-details">
      <table className="box-score">
        <tr>
          <th></th>
          <th>Q1</th>
          <th>Q2</th>
          <th>Q3</th>
          <th>Q4</th>
          <th>Final</th>
        </tr>
        <tr>
          <th>{props.awayNickname}</th>
          <td>{props.awayQ1}</td>
          <td>{props.awayQ2}</td>
          <td>{props.awayQ3}</td>
          <td>{props.awayQ4}</td>
          <th>{props.awayScore}</th>
        </tr>
        <tr>
          <th>{props.homeNickname}</th>
          <td>{props.homeQ1}</td>
          <td>{props.homeQ2}</td>
          <td>{props.homeQ3}</td>
          <td>{props.homeQ4}</td>
          <th>{props.homeScore}</th>
        </tr>
      </table>
    </div>
  );
}

export default GameDetails
