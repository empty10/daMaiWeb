import React from 'react';
import {NavLink} from 'react-router-dom'
import '../static/less/iconfont/iconfont.css'

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={'nav-fixed'}>
            <div className={'con-axis clearfix'}>
            <NavLink to={'/home'} activeClassName='active'><i className={'iconfont icon-damailogo'}></i><span>首页</span></NavLink>
            <NavLink to={'/personal'} activeClassName='active'><i className={'iconfont icon-wodedamaijihuo'}></i><span>我的</span></NavLink>
            </div>
        </div>
    }
}