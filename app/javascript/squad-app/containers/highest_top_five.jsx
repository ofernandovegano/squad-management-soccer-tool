import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HighestTopFive extends Component {


  render() {
    return (
      <div className='container-top'>
        {this.props.topFive.reverse().slice(0, 5).map(top => {
          return (
            <div className='top' key={top.name}>
              <div>{top.name}</div>
              <div>{top.avg_age_players.toFixed(1)}</div>
            </div>
          )
        }
        )}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    // topFive: state.teams[0].sort(team => team.avg_age_players)
    topFive: state.teams.sort((a, b)=> a.avg_age_players - b.avg_age_players)

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HighestTopFive);
