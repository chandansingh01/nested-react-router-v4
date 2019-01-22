import React from 'react';
import PropTypes from 'prop-types';

function Panel(props){
      return(
            <div>
                        <label htmlFor="date">Date</label>
                        <input type="checkbox" checked={props.isDateOn}  name="date" onChange={props.toggleDate} />  
                        </div>
      )
}


Panel.defaultProps = {
      isDateOn:true,
      toggleDate:()=>{}
}

Panel.propTypes = {
 idDateOn:PropTypes.bool.isRequired,
 toggleDate:PropTypes.func.isRequired

}

export default Panel;