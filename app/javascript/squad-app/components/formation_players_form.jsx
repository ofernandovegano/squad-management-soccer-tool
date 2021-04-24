import React from 'react';

import Players from './players'
import FormationSelectOptions from './formation_select_options'

const FormationPlayersForm = () => {
  
    return (
   

      <div className="col-12 col-md-6">
        <FormationSelectOptions />
        <div className='formation-field'>

          <div className="positions"><Players /><Players /></div>
          <div className="positions"><Players /></div>
          <div className="positions"><Players /><Players /><Players /></div>
          <div className="positions"><Players /><Players /><Players /><Players /></div>
          
          {/* Goal keeper below */}
          <div className="positions"><Players /></div>

          <div className='middle-camp-line'><div></div></div>
          <div className="circle-form"></div>
        </div>
      </div>

    );
  };

export default FormationPlayersForm;
