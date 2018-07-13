import React from 'react';
import {connect} from 'react-redux'
import {Switch,Route,Redirect} from 'react-router-dom'
import Login from "./person/Login";
import Rest from "./person/Rest";
import {queryCheckLogin, queryRegister} from "../api/register";
import Tip from "./person/Tip";
import RestAfter from "./person/RestAfter";
import Cart from "./person/Cart";

class Person extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            isLogin:false
        }
    }
    async componentDidMount(){
        let result=await queryCheckLogin(),
       isLogin=parseFloat(result.code)===0?true:false;
        this.setState({isLogin})
    }
    async componentWillReceiveProps(){
        let resylt=await queryCheckLogin(),
        isLogin=parseFloat(resylt.code)===0?true:false;
        this.setState({isLogin})
    }
    render() {
        return <div>
            <Switch>
                <Route path='/personal/restafter' render={()=>{
                    if(this.state.isLogin){
                        return <RestAfter/>
                    }
                    return <Tip/>
                }
                }></Route>
                <Route path='/personal/login' component={Login}></Route>
                <Route path='/personal/register' component={Rest}></Route>
                <Route path='/personal/favorite/list' component={Cart}></Route>
                <Route path='/personal/order/list' component={Cart}></Route>
                <Redirect from='/personal' to='/personal/restafter'></Redirect>
            </Switch>
        </div>
    }
}

export default Person;