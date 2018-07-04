import React from 'react';
import {connect} from "react-redux";
import {Switch,Redirect,Route} from 'react-router-dom'

import LoginMess from './login/LoginMess'
import LoginOpen from './login/LoginOpen'

import '../static/css/common.less';
import '../static/css/loginHeadBox.less';
import '../static/css/PdragFooter.less';
import '../static/css/loginMess.less'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'

export default class Login extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state={
            opacity:1
        }
    }

    render() {
        return <section>
            <div className='loginHeadBox'>
                <img src="//gw.alicdn.com/tfs/TB1bx8NXlfH8KJjy1XbXXbLdXXa-300-138.png" alt=""/>
                <div className='phoneName clearfix'><span onClick={this.clicknine}>+86<Icon type='down'></Icon></span><input type="text" placeholder='请输入手机号码'/></div></div>
            <div className='loginMessBox'>
                <input type="text" placeholder='请输入密码'/>
                <button type='danger'>登录</button>
                <div className='spanL'><span className='spanLeft'><a href="javascript:;">账号密码登录</a></span>
                    <span className='spanRight'><Link to='/personal/register'>新用户注册</Link></span></div>
            </div>
            <div className='loginOpenBox clearfix' style={{opacity:this.state.opacity}}>
                <span className='spLeft'><a href="javascript:;" onClick={this.selectBootom}>取消</a></span>
                <span className='spRight'><a href="javascript:;" onClick={()=>{
                    this.setState({
                        opacity:0
                    })  }
                }>确定</a></span>
                <ul className='selectBottom'>
                    <li>+86中国大陆地区</li>
                    <li>+852中国香港地区</li>
                    <li>+853中国澳门地区</li>
                    <li>+886中国台湾地区</li>
                </ul>
            </div>;
        </section>;
    }
    selectBootom=()=>{
        this.setState({
            opacity:0
        })
    }
}









