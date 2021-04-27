import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Field, reduxForm } from 'redux-form';

import { addTeam } from '../actions';

import SearchPlayers from './search_players';
import FormationPlayersForm from './formation_players_form';




class CreateTeamForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.addTeam(this.props.teams, values, () => {
    //   this.props.history.push('/');
    // });
  }
  
  render() {
    return (
    <div key="add" className="form-container">
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="name">Team Name</label>
              <input name="name" type="text" placeholder="Juventus F. C."className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" type="text" placeholder="Cristiano Ronaldo is better than Lionel Messi" rows='10' className="form-control form-description"></textarea>
            </div>     
          </div>
          <div className="col-12 col-md-6">
            
            <div className="form-group form-right form-check">
              <label htmlFor="website">Team website</label>
              <input name="website" type="text" placeholder="www.juventus.com"className="form-control" />
            </div>
            <div className="form-group form-right">
              <label htmlFor="teamType">Team Type</label>
              <div className="radio-check">

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="teamType" value='Real' id="radio-real" value="option1" checked />
                  <label className="form-check-label" for="radio-real">
                    Real
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="teamType" value='Fantasy' id="radio-fantasy" value="option2" />
                  <label className="form-check-label" for="radio-fantasy">
                    Fantasy
                  </label>
                </div>
              </div>
            </div>


            <div className="form-group form-right">
              <label htmlFor="tags">Tags</label>
              <input name="tags" type="text"className="form-control form-tags" />
            </div>
          </div>
        </div>
        <h3 className='sub-header-before-tatics'>CONFIGURE SQUAD</h3>
        <div className="row">
          <div className="col-12 col-md-6">  
          <FormationPlayersForm />
          <button type="submit" className='saveButton'>Save</button>
        </div>      
      <SearchPlayers  />
      </div>
      </form>
    </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    teams: state.myTeams
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTeam }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeamForm);
