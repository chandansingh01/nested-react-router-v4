import React from 'react';
import PropTypes from 'prop-types'
import DateTime from '../lib/DateTime';

function Ticker(props){
      return(
            <div>
                  <h1>{DateTime.toTimeString(props.date)}</h1>
            </div>
      )
}



export default Ticker;