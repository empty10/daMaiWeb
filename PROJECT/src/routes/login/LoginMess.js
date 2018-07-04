import React from 'react';
import {connect} from "react-redux";
import {Input,Button} from 'antd';
import '../../static/css/loginMess.less';
import {Link} from 'react-router-dom';


export default class LoginMess extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {
        return <section className='loginMessBox'>
            <input type="text" placeholder='请输入密码'/>
            <button type='danger'>登录</button>
            <div className='spanL'><span className='spanLeft'><a href="javascript:;">账号密码登录</a></span>
                <span className='spanRight'><Link to='/personal/register'>新用户注册</Link></span></div>
        </section>;
    }
}
