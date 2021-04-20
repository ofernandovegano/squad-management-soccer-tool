import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { } from '../actions';

import CreateTeamForm from './create_team_form';

class SearchPlayers extends Component {

  render() {
    return (
      <div className="form-group form-right">
        <p className='search-players-header'>Search Players</p>
        <input type="text" placeholder='Ronaldo' className="form-control input-search-player"/>
        <div className='player-searched'>
          <div className='player-searched-name-age'>
            <span><strong>Name: </strong> <span className='player-data'>Cristiano Ronaldo</span></span>
            <span><strong>age: </strong> <span className='player-data'>32</span> </span>
          </div>
          <span><strong>Nacionality: </strong> <span className='player-data'>Portugal</span> </span>
        </div>

        <div className='player-searched'>
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
        </div>

      </div>

    );
  };
};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlayers);