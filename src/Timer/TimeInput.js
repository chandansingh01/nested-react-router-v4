import React ,{Component} from 'react';

function TimeInput(props) {
      return(
            <div>
                  <label htmlFor="timeinput">Enter Time</label>
                  <input type="number" name="timeinput" onChange={props.handleInput}/>
            </div>

      )
}
export default TimeInput;