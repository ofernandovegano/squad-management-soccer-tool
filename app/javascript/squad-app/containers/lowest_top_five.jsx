import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LowestTopFive extends Component {


  render() {
    return (
      <div className='container-top'>
        {this.props.topFive.filter(team => team.avg_age_players !== null).slice(0, 5).map(top => {
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
    topFive: state.teams.sort((a, b)=> a.avg_age_players - b.avg_age_players)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LowestTopFive);
