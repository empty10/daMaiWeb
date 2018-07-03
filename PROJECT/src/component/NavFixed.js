import React from 'react';
import {NavLink} from 'react-router-dom'
import '../static/less/iconfont/iconfont.css'

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={'nav-fixed'}>
            <NavLink to={'/'}><i className={'iconfont icon-damailogo'}></i><span>首页</span></NavLink>
            <NavLink to={'/'}><i className={'iconfont icon-wodedamaijihuo'}></i><span>我的</span></NavLink>
        </div>
    }
}