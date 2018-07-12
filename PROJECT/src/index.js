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
import ListShow from "./routes/showList/ListShow";

render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div className={'container'}>
                <Switch>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/list'} component={ListShow}/>
                    <Route path={'/'} component={Detail}/>
                    {/*<Redirect to={'/home'}/>*/}
                </Switch>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);