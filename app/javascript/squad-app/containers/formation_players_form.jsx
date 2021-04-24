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
  }

  Player(numberPlayers) {
    for (let i = 0; i < numberPlayers; i++) {
      return <Player />
    }
  }

  handleChange(e){
    const formation = e.target.value;
    // this.setState({ attack: parseInt(formation.slice(-1)) });
    // if (formation.length === 5) {
    //   this.setState({ middleAttack: 0 })
    // } else{
    //   this.setState({ middleAttack: parseInt(formation.slice(4, 5)) });
    // }
    // this.setState({ middle: parseInt(formation.slice(2, 3)) });
    // this.setState({ defense: parseInt(formation.slice(0, 1)) });
    console.log(formation)
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
          {/* <option value="3-4-3">3-4-3</option> */}
          {/* <option value="3-5-2">3-5-2</option> */}
          {/* <option value="4-3-2">4-3-2</option> */}
          {/* <option value="4-4-2">4-4-2</option> */}
          {/* <option value="4-5-1">4-5-1</option> */}
          {/* <option value="5-4-1">5-4-1</option> */}
        </select>
        <div className='formation-field'>

          <div className="positions"><Player /><Player /></div>
          <div className="positions"><Player /></div>
          <div className="positions"><Player /><Player /><Player /></div>
          <div className="positions"><Player /><Player /><Player /><Player /></div>

          {/* Goal keeper below */}
          <div className="positions"><Player /></div>

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
