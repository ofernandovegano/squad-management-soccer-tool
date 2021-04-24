import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchApi } from '../actions';

import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer';
import MyTeams from './my_teams';
import TopFive from './top_five';
import MostLessPicked from './most_less_picked.jsx'

class App extends Component {
  componentWillMount() {
    this.props.fetchApi()
  }

  render() {
    return (
      <div className="app-container">
        <Navbar />
        <div className="row inside-margin main">
          <div className="col-12 col-md-6 first-column">
            <div className="my-teams rounded-corners-up-change">
              <MyTeams />
            </div>
          </div>
          <div className="col-12 col-md-6 second-column">
            <div className="top-five rounded-corners">
              <TopFive />
            </div>
            <div className="most-less-picked rounded-corners-up">
              <MostLessPicked />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    apiResults: state.api
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchApi }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
