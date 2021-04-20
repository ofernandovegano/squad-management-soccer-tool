import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Field, reduxForm } from 'redux-form';

import { addTeam } from '../actions';

import SearchPlayers from './search_players';


class CreateTeamForm extends Component {
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.addTeam(this.props.teams, values, () => {
  //     this.props.history.push('/');
  //   });
  // }

  render() {
    return (
    <div key="add" className="form-container">
      <form>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="name">Team Name</label>
              <input name="name" type="text" placeholder="Juventus F. C."className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" type="text" placeholder="Cristiano Ronaldo is better than Lionel Messi" rows='10' className="form-control form-description"></textarea>
            </div>     
          </div>
          <div className="col-6">
            
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
            <div className="col-6">
              {/* <span className='formation-header'>Formation</span> */}
              <label for="formation" className='formation-header'>Formation</label>
              <select id="formation" name="formation">
                <option value="3-2-2-3">3-2-2-3</option>
                <option value="3-2-2-1">3-2-2-1</option>
                <option value="3-4-3">3-4-3</option>
                <option value="3-5-2">3-5-2</option>
                <option value="4-2-3-1">4-2-3-1</option>
                <option value="4-3-1-1">4-3-1-1</option>
                <option value="4-3-2">4-3-2</option>
                <option value="4-4-2">4-4-2</option>
                <option value="4-5-1">4-5-1</option>
                <option value="5-4-1">5-4-1</option>
              </select>
              <div className='formationField'>
                <div className="positions">

                <div className="after-positions">
                    <div className='plus-player'><div className='plus'>+</div></div>
                    <div className="player-border">
                      <div className="player"></div>
                    </div>
                </div>
                <div className="after-positions">
                    <div className='plus-player'><div className='plus'>+</div></div>
                    <div className="player-border">
                      <div className="player"></div>
                    </div>
                </div>

                </div>

                <div className="positions">

                <div className="after-positions">
                    <div className='plus-player'><div className='plus'>+</div></div>
                    <div className="player-border">
                      <div className="player"></div>
                    </div>
                </div>

                </div>

                <div className="positions">


                <div className="after-positions">
                    <div className='plus-player'><div className='plus'>+</div></div>
                    <div className="player-border">
                      <div className="player"></div>
                    </div>
                </div>
                <div className="after-positions">
                    <div className='plus-player'><div className='plus'>+</div></div>
                    <div className="player-border">
                      <div className="player"></div>
                    </div>
                </div>
                <div className="after-positions">
                    <div className='plus-player'><div className='plus'>+</div></div>
                    <div className="player-border">
                      <div className="player"></div>
                    </div>
                </div>

                </div>


                <div className="positions">

                <div className="after-positions">
                    <div className='plus-player'><div className='plus'>+</div></div>
                    <div className="player-border">
                      <div className="player"></div>
                    </div>
                </div>
                <div className="after-positions">
                    <div className='plus-player'><div className='plus'>+</div></div>
                    <div className="player-border">
                      <div className="player"></div>
                    </div>
                </div>
                <div className="after-positions">
                    <div className='plus-player'><div className='plus'>+</div></div>
                    <div className="player-border">
                      <div className="player"></div>
                    </div>
                </div>
                <div className="after-positions">
                    <div className='plus-player'><div className='plus'>+</div></div>
                    <div className="player-border">
                      <div className="player"></div>
                    </div>
                </div>

                </div>

                

                <div className="positions">
                  <div className="after-positions">
                    <div className='plus-player'><div className='plus'>+</div></div>
                    <div className="player-border">
                      <div className="player"></div>
                    </div>
                  </div>
                </div>


                <div className='middle-camp-line'><div>
                  </div></div>
                <div className="circle-form"></div>
              </div>


              
            </div>
            <div className="col-6 search-players">

              <SearchPlayers />
              
            </div>
          </div>
          <div className="row">
            
        <button type="submit" className='saveButton'>Save</button>
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
