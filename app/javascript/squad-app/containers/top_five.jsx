import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { } from '../actions';
import HighestTopFive from './highest_top_five';
import LowestTopFive from './lowest_top_five';


class TopFive extends Component {

  render() {
    return (
    <div className="">
      <div className="h2-headers">
        <h2>Top 5</h2>
      </div>
      <div className="row top-five-sub-headers">
        <div className="highest avg-age col-6">
          <h3>Highest avg Age</h3>
            <div className='avg-age-data'>
              <HighestTopFive />  
            </div>
        </div>
        <div className="lowest avg-age col-6">
          <h3>Lowest avg Age</h3>
            <div className='avg-age-data'>
              <LowestTopFive />
          </div>
        </div>   
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

export default connect(mapStateToProps, mapDispatchToProps)(TopFive);
