import React, {PureComponent} from 'react';

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
      homeTeam,
      seasonYear,
    } = this.props;
    return (
      <div>{awayTeam + " @ " + homeTeam}
        <button onClick={this.handleExpand}>
          {this.state.isExpanded ? "Hide Details" : "Show Details"}
        </button>
        {details}
      </div>
    );
  }
}

export default Game;
