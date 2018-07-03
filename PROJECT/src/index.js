/*BASE*/
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

/*REDUX STORE*/
import {Provider} from 'react-redux';
import store from './store/index';

/*ANTD*/


/*IMPORT CSS*/
import './static/css/reset.min.css';


/*IMPORT COMPONENT*/


/*RENDER*/
render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                {/*HEADER*/}
                <NavTop/>

                {/*MAIN=>ROUTE*/}
                <main className='container'>
                    <Switch>
                        <Route path='/course' component={Home}/>
                        <Route path='/mycourse' component={Mycourse}/>
                        <Route path='/person' component={Person}/>
                        <Redirect to='/course'/>
                    </Switch>
                </main>

                {/*FOOTER*/}
                <NavBottom/>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);