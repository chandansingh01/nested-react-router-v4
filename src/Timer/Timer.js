import React , {Component} from 'react';
import TimeInput from './TimeInput'
import Watcher from './Watcher'
class Timer extends Component {

      constructor(props){
         super(props)
         this.state={
               seconds:0,
               time:0,
               status:null

         }   

         this.handleInput = this.handleInput.bind(this);
      }

      handleInput(event){
            

            
      }

      startTimer(){

           
       
            this.setState(()=>{
                  return {
                        milis:100
                  }
            })

            if(this.state.minutes||this.state.hours||this.state.days){
                  
                  setInterval(()=>{
                        if (seconds>0||minutes>0||hours>0) {
                              if (milis>0) {
                                 milis = milis-1;       
                              }                                                      
                        }
                        

                  },10)
            }



      }

      render(){
            return(
                  <div>
                        <TimeInput handleInput={this.handleInput}/>
                        <Watcher hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} days={this.state.days} milis={this.state.milis}/>
                  </div>
            )
      }
}

export default Timer;