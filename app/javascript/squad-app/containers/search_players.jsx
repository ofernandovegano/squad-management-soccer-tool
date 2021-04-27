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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchPlayers(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
    <div className="col-12 col-md-6 search-players">
      <div className="form-group form-right">
          <p className='search-players-header'>Search Players</p>
          
        <form onSubmit={this.handleSubmit} className="search-form">
          <input 
            type="text"
            placeholder='Ronaldo'
            className="form-control input-search-player"
            autoComplete="off"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className='btn btn-primary'>Search</button>
          </form>
          
        <div className='player-searched'>
          <div className='player-searched-name-age'>
            <span><strong>Name: </strong> <span className='player-data'>Cristiano Ronaldo</span></span>
            <span><strong>age: </strong> <span className='player-data'>32</span> </span>
          </div>
          <span><strong>Nacionality: </strong> <span className='player-data'>Portugal</span> </span>
        </div>

        {/* <div className='player-searched'>
          <div className='player-searched-name-age'>
           <span> <strong>Name: </strong> <span className='player-data'>Ronaldo Luiz de Alves</span> </span>
            <span><strong>age: </strong> <span className='player-data'>28</span> </span>
          </div>
          <span><strong>Nacionality: </strong> <span className='player-data'>Brazil</span> </span>
        </div>

        <div className='player-searched'>
          <div className='player-searched-name-age'>
            <span><strong>Name: </strong> <span className='player-data'>Ronaldo da Silva de Souza</span> </span>
            <span><strong>age: </strong> <span className='player-data'>18</span> </span>
          </div>
         <span> <strong>Nacionality: </strong> <span className='player-data'>Brazil</span> </span>
        </div> */}

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