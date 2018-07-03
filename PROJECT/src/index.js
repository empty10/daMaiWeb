import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/index'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
//antd
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
//less
import './static/less/reset.min.css'
import Home from "./store/routes/Home";
import Person from "./store/routes/Person";
import Detail from "./store/routes/Detail";

render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div className={'container'}>
                <Switch>
                    <Route path={'/home'} exact component={Home}/>
                    <Route path={'/personal'} component={Person}/>
                    <Route path={'/detail'} component={Detail}/>
                    <Redirect from={'/'} to={'/home'}/>
                </Switch>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);