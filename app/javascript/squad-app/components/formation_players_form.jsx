import React from 'react';

const FormationPlayersForm = () => {
  
    return (
   

      <div className="col-12 col-md-6">
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
        <div className='formation-field'>
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

    );
  };

export default FormationPlayersForm;
