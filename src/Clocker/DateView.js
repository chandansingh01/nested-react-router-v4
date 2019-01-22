import React from 'react';
import DateTime from '../lib/DateTime'

function DateView(props){
      return(
            <div>
                  <h3>{DateTime.toDateString()}</h3>
            </div>
      )

      
}

export default DateView;