import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Player from '../components/player'



class FormationPlayersForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectValue: '4-2-3-1'
    };
    this.handleChange = this.handleChange.bind(this)
  }

  player(numberPlayers) {
    if (numberPlayers === 1) {
      return [1];
    } else if (numberPlayers === 2) {
      return [1, 2];
    } else if (numberPlayers === 3) {
      return [1, 2, 3];
    } else if (numberPlayers === 4) {
      return [1, 2, 3, 4];
    } else {
      []
    }
  }

  handleChange(e){
    const formation = e.target.value;
    // console.log(e.target.value)
    this.setState({ selectValue: e.target.value});
    // console.log(this.state.selectValue)
  }
  
  render() {
    return (
      <div className="col-12 col-md-6">
        <label for="formation" className='formation-header'>Formation</label>
        <select id="formation" name="formation" onChange={this.handleChange} defaultValue={this.state.selectValue}>
          <option value="4-2-3-1">4-2-3-1</option>
          <option value="3-2-2-3">3-2-2-3</option>
          <option value="3-2-2-1">3-2-2-1</option>
          <option value="4-3-1-1">4-3-2-1</option>
          <option value="3-4-3">3-4-3</option>
          <option value="3-5-2">3-5-2</option>
          <option value="4-3-2">4-3-2</option>
          <option value="4-4-2">4-4-2</option>
          <option value="4-5-1">4-5-1</option>
          <option value="5-4-1">5-4-1</option>
        </select>
        <div className='formation-field'>

          <div className="positions">{ this.player(parseInt(this.state.selectValue.slice(-1))).map(play => <Player key={play} />) }</div>
          <div className="positions">{ this.state.selectValue.length === 5 ? '' : this.player(parseInt(this.state.selectValue.slice(4, 5))).map(play => <Player key={play} />)} </div>
          <div className="positions">{ this.player(parseInt(this.state.selectValue.slice(2, 3))).map(play => <Player key={play} />) }</div>
          <div className="positions">{ this.player(parseInt(this.state.selectValue.slice(0, 1))).map(play => <Player key={play} />) }</div>
          {/* Goal keeper below */}
          <div className="positions"><Player /></div>
          {/* Camp lines below */}
          <div className='middle-camp-line'><div></div></div>
          <div className="circle-form"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FormationPlayersForm);
