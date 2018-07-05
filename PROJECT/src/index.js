import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/index'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
//antd
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
//less
import './static/css/common.less'
import './static/css/reset.min.css';
import Home from "./routes/Home";
import Person from "./routes/Person";
import Detail from "./routes/Detail";
import Login from "./routes/person/Login";
import Rest from "./routes/person/Rest";
import RestAfter from "./routes/person/RestAfter";
import Regirect from "./routes/Regirect";
import PersonalList from "./routes/restAfter/PersonalList";
import LoginMess from "./routes/person/LoginMess";
import LoginOpen from "./routes/person/LoginOpen";

render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div className={'container'}>
                <Switch>
                    {/*<Route path={'/home'} exact component={Home}/>*/}
                    {/*<Route path={'/personal'} component={Person}/>*/}
                    <Route path={'/personal'} component={Person}/>
                    {/*<Route path={'/personal/register'} exact component={Rest}/>*/}
                    {/*<Redirect to={'/home'}/>*/}
                </Switch>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);