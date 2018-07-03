import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import {Icon,Button} from 'antd';

class NavBottom extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <footer className='footerNavBox'>
            <NavLink to=''>
                <Icon type="customer-service" />
                <span>客服</span>
            </NavLink>
            <NavLink to='/mycourse'>
                <Icon type="heart-o" />
                <span>关注</span>
            </NavLink>
            <NavLink to='/person'>
                <span className=''>立即购买</span>
            </NavLink>
        </footer>;
    }
}

export default withRouter(connect()(NavBottom));