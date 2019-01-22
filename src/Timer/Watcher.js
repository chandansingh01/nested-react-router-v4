import React ,{Component} from 'react';
import PropTypes from 'prop-types';

function Watcher(props) {
      return(
            <div>
                  <h1>{props.hours}:{props.minutes}:{props.seconds}:{props.milis}</h1>
            </div>

      )
}

Watcher.defaultProps = {
      hours:0,
      minutes:0,
      seconds:0,
      milis:0
    }

Watcher.propTypes = {
  hours:PropTypes.number.isRequired,
  minutes:PropTypes.number.isRequired,
  seconds:PropTypes.number.isRequired,
  milis:PropTypes.number.isRequired
}

export default Watcher;