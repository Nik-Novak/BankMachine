import React from "react";
import Title from "../Title";
import JButton from "../JButton";
import Dropdown from 'react-dropdown'

var $ = require('jquery');

export default class ScreenTransfer extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
  constructor(){
    super();
  }
    
    removeDigit(){
        $('#screen-transfer input').val($('#screen-transfer input').val().substr(0,$('#screen-transfer input').val().toString().length-1));
    }
    
    clearDigit(){
        $('#screen-transfer input').val(null);
    }
    
    enterDigit(digit){
        $('#screen-transfer input').val($('#screen-transfer input').val() + digit);
    }
    
    submit(digit){
        $('#screen-transfer input').val($('#screen-transfer input').val() + digit);
    }
    
    readVal(){
        return $('#screen-transfer input').val();
    }

  render() {
      console.log(this.props);
    return (
      <div id="screen-transfer">
        <div>
          <div class = "left">
            <JButton buttonclass="headerButton" text="BACK" icon="fa-arrow-circle-left" nav="../" {...this.props}/>
          </div>
          <div class = "right">
            <JButton buttonclass="headerButton" text="HOME" icon="fa-home" nav="/home" {...this.props}/>
          </div>
        </div>
        
        <Title title="Transfer" />
        <div class="buttons-main">

       <div class="col-md-12">
           <div class="col-md-5 col-md-offset-1">
           <Dropdown options={this.props.from} onChange={this._onSelect} placeholder="Select an option" />
        </div>

          <div class="col-md-5">
          <Dropdown options={this.props.to} onChange={this._onSelect} placeholder="Select an option" />
          </div>
       </div>
        
          
          
          
          <div class="buttons-main">
        
          
          
          <div class="col-md-6 col-md-offset-3">
             <input class="numericInput" type="number"/>
          </div>
          
          <div class="col-md-4 col-md-offset-4">
             <div class='bouttons'>
                <JButton buttonclass="boutton tester1" text="SUBMIT" nav={this.props.redirects[0]} query={{amt:this.readVal.bind(this)}} {...this.props}/>
            </div>
          </div>
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="1" click={this.enterDigit.bind(this)} args={[1]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="2" click={this.enterDigit.bind(this)} args={[2]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="3" click={this.enterDigit.bind(this)} args={[3]} {...this.props}/>
            </div>
          </div>
          
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="4" click={this.enterDigit.bind(this)} args={[4]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="5" click={this.enterDigit.bind(this)} args={[5]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="6" click={this.enterDigit.bind(this)} args={[6]} {...this.props}/>
            </div>
          </div>
         
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="7" click={this.enterDigit.bind(this)} args={[7]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="8" click={this.enterDigit.bind(this)} args={[8]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="9" click={this.enterDigit.bind(this)} args={[9]} {...this.props}/>
            </div>
          </div>
        
          
          
          <div class="col-md-2 col-md-offset-3">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="BKSP" click={this.removeDigit.bind(this)} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="0" click={this.enterDigit.bind(this)} args={[0]} {...this.props}/>
            </div>
          </div>
          <div class="col-md-2">
             <div class='bouttons'>
                <JButton buttonclass="boutton" text="CLEAR" click={this.clearDigit.bind(this)} {...this.props}/>
            </div>
          </div>
          
      
        </div>
          
          
          
          

        </div>
      </div>
    );
  }
}