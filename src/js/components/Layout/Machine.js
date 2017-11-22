import React from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
        
import Title from "./Machine/Title";
import JButton from "./Machine/JButton";
import ScreenWelcome from "./Machine/Screens/ScreenWelcome"
import ScreenSignIn from "./Machine/Screens/ScreenSignIn"
import ScreenCard from "./Machine/Screens/ScreenCard"
import ScreenMobile from "./Machine/Screens/ScreenMobile"

//var $ = require('jquery');

export default class Machine extends React.Component {
    
  render() { 
    return (
      <div id="content-wrapper">
        <BrowserRouter>
           <Switch>
               <Route path="/" exact render={props => <ScreenWelcome {...props} />}/>
               <Route path="/signin" exact render={props => <ScreenSignIn {...props} />}/>
               <Route path="/signin/card" exact render={props => <ScreenCard {...props} />}/>
               <Route path="/signin/mobile" exact render={props => <ScreenMobile {...props} />}/>
               <Route path="/signin/number" exact render={props => <ScreenSignIn {...props} />}/>
           </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
