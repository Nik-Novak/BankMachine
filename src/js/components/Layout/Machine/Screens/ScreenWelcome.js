import React from "react";
import Title from "../Title";
import JButton from "../JButton";

//var $ = require('jquery');

export default class ScreenWelcome extends React.Component {
//    componentWillMount(){
//        this.props.history.push('/welcome?ijustgotpushed=true');
//    }
  render() {
      console.log(this.props);
    return (
      <div id="screen-welcome">
      <Title title="Welcome to TD Canada Trust" />
      <div class="buttons-secondary">

        

    </div>
      <div class="buttons-main">
        <div class="col-md-offset-2 col-md-4 ">
            <div class='bouttons'>
                <JButton text="English" buttonclass="boutton welcomeFlag" img="img/flags/gb.svg" nav="/signin" {...this.props}/>
            </div>
        </div>

        <div class="col-md-4">
            <div class='bouttons'>
                <JButton text="Français" buttonclass="boutton welcomeFlag" img="img/flags/france.svg" nav="/french" {...this.props}/>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="col-md-2 col-md-offset-10">
            <JButton buttonclass= "smallButton" text="Other Languages" icon="fa-globe" nav="/languages" {...this.props}/>
        </div>
    </div>
    
    </div>
    );
  }
}