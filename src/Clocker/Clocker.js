import React from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel'
import DateView from './DateView'
import Ticker from './Ticker'


class Clocker extends React.Component{

      constructor(props){
         super(props)

            this.state = {
                  date:new Date(),
                  isDateOn:true
            }

            this.handleCheckbox = this.handleCheckbox.bind(this);

      }

      handleCheckbox(event){
            this.setState((prevState)=>{
                  return{
                        isDateOn:prevState.isDateOn?false:true
                  }
            })

      }

      componentDidMount(){
          this.startTimer()  
      }

      componentWillUnmount(){
            clearInterval(this.timer);
      }



      startTimer(){
            this.timer = setInterval(()=>{
                  this.setState(()=>({
                        date:new Date()
                  }
                  ))
            },1000)
            
      }
   

      render(){
            return(
                  <div>
                        <Panel isDateOn={this.state.isDateOn} toggleDate={this.handleCheckbox}/>
                        <Ticker date={this.state.date}/>
                        {this.state.isDateOn && <DateView/>}
                        
                      
                  </div>
            )
      }
}

export default Clocker;