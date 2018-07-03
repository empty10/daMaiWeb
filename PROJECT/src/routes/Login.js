import React from 'react';
import {connect} from "react-redux";
import {Switch,Redirect,Route} from 'react-router-dom'
import PloginHead from '../component/PloginHead';
import LoginMess from './login/LoginMess'
import LoginOpen from './login/LoginOpen'

export default class Login extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {
        return <section>
              <PloginHead/>
             <Switch>
                 <Route path='/login/mess' component={LoginMess}></Route>
                 <Route path='/login/open' component={LoginOpen}></Route>
             </Switch>


        </section>;
    }
}









