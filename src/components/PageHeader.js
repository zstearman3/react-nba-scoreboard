import React, { Component } from 'react';

class PageHeader extends Component {

  state = {
    favoriteTeam: ""
  }

  handleChange = (e) => {
    this.setState({favoriteTeam: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setFavoriteTeam(this.state.favoriteTeam);
  };


  render() {
    return(
      <>
        <h1 id="page-title">NBA Scoreboard - {this.props.date}</h1>

        <form onSubmit = {this.handleSubmit}>
          <select defaultValue={'DEFAULT'} onChange = {this.handleChange}>
            <option disabled value="DEFAULT">Choose Team</option>
            {this.props.teams.map((nickname,y) => <option key={y}>{nickname}</option>)}
          </select>
          <input type="submit" value="Choose Favorite Team" />
        </form>
      </>
    );
  }
}

export default PageHeader;
