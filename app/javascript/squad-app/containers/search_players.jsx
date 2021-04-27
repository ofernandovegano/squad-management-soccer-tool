import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchPlayers } from '../actions';

import CreateTeamForm from './create_team_form';

class SearchPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleClick = (event) => {
    this.props.searchPlayers(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
    <div className="col-12 col-md-6 search-players">
      <div className="form-group form-right">
          <p className='search-players-header'>Search Players</p>
          <div className="search-players">
            
            <input
              type="text"
              placeholder='Ronaldo'
              className="form-control input-search-player"
              autoComplete="off"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div classname='search-font-icon'><div><i class="fas fa-search" onClick={this.handleClick}></i></div></div>
          </div>
          
        {this.props.players
          .map((player) => {
          return(
            <div className='player-searched'>
              <div className='player-searched-name-age'>
                <span><strong>Name: </strong> <span className='player-data'>{ player.player.name }</span></span>
                <span><strong>age: </strong> <span className='player-data'>{ player.player.age }</span> </span>
              </div>
              <span><strong>Team: </strong> <span className='player-data'>{ player.statistics[0].team.name}</span> </span>
            </div>
          )} 
        )}

      </div>
    </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchPlayers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlayers);