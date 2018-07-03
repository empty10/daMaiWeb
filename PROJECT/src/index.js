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

render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <Switch>
                <Route path={'/home'} exact/>
                <Route path={'/personal'}/>
            </Switch>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);