import React from 'react';
import {Link,Switch,Redirect,Route} from 'react-router-dom'
export default class PersonalList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Switch>
                <Route path='/personal/list' component={PersonalList}></Route>
                <Route path='/personal/' component={PersonalList}></Route>
                {/*<Route path='/personal/list'></Route>*/}

            </Switch>
        </div>;
    }
}