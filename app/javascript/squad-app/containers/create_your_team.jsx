import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { } from '../actions';

import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer';
import CreateTeamForm from './create_team_form';


class CreateYourTeam extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="main rounded-corners create-your-team-container">
          <div className="h2-headers">
            <h2>Create your team</h2>
          </div>
          <h3 className='sub-header'>TEAM INFORMATION</h3>
          <CreateTeamForm />
        </div>
        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateYourTeam);
