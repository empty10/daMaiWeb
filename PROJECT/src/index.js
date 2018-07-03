import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/index'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
//antd
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
//less
import './static/css/reset.min.css';
import Home from "./routes/Home";
import Person from "./routes/Person";
import Detail from "./routes/Detail";
import Login from "./routes/Login";

render(
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div className={'container'}>
                <Switch>
                    {/*<Route path={'/home'} exact component={Home}/>*/}
                    {/*<Route path={'/personal'} component={Person}/>*/}
                    <Route path={'/login'} component={Login}/>
                    {/*<Redirect to={'/home'}/>*/}
                </Switch>
            </div>
        </LocaleProvider>
    </HashRouter>
, root);