import React from 'react';
import PropTypes from 'prop-types';


class Clicker extends React.Component{
      
      constructor(props){
         
      super(props);

      this.state = {
            lap:this.props.lap,            
      }

      this.handleClick = this.handleClick.bind(this);
      this.handleReset = this.handleReset.bind(this);

      }

      handleClick(value){
            this.setState((prevState)=>{
                  return {
                        lap:prevState.lap+value
                  }
            })
      }

      handleReset(){
            this.setState(()=>{
                  return {
                        lap:0
                  }
            })
      }
      
      render(){
            return(
                  <div className="clicker">
                        <div className="lap-view">
                              <h1>{this.state.lap}</h1>
                        </div>
                        <div className="footer">
                              <button onClick={this.handleClick.bind(null,-1)}>-1</button>
                              <button onClick={this.handleReset}>reset</button>
                              <button onClick={this.handleClick.bind(null,1)}>+1</button>
                        </div>
                  </div>
            )
      }
}

Clicker.defaultProps = {
      lap:0
}

Clicker.propTypes = {
      lap:PropTypes.number.isRequired
}

export default Clicker;