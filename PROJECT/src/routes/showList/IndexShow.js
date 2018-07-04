import React from 'react';
import {connect} from 'react-redux'

class IndexShow extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <section>
            IndexShow
        </section>
    }
}

export default connect()(IndexShow);