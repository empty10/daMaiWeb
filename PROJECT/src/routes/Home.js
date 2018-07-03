import React from 'react';
import {connect} from 'react-redux'
//import NavFixed from "../component/NavFixed";
import SearchBar from '../component/SearchBar'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>
            aaa
            <SearchBar/>
           {/* <NavFixed/>*/}
        </div>
    }
}

export default connect()(Home);