import React, { Component } from 'react';

class PageHeader extends Component {

  favoriteTeam = React.createRef();

  handleSubmit = (e) =>
    e.preventDefault();

  render() {
    return(
      <>
        <h1 id="page-title">NBA Scoreboard</h1>

        <form onSubmit = {this.handleSubmit}>
          <select>{this.props.teams.map((nickname,y) => <option key={y}>{nickname}</option>)}</select>
          <input type="submit" value="Choose Favorite Team" />
        </form>
      </>
    );
  }
}

export default PageHeader;
