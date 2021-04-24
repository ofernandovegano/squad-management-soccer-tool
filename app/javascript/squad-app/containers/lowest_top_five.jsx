import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LowestTopFive extends Component {


  render() {
    return (
      <div className='container-top'>
        {this.props.topFive.map(top => {
          return (
            <div className='top' key={top[0]}>
              <div>{top[0]}</div>
              <div>{top[1]}</div>
              <p>AAAAAAAAAAAAAAAA</p>
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
    topFive: state.myTeams[1].sort((a, b) => a[1] - b[1]).slice(0, 5)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LowestTopFive);
