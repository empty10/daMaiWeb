import React from 'react';
import {connect} from "react-redux";
import '../../static/css/loginOpen.less'

export default class LoginOpen extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {
        return <section className='openFooterBox'>
            <input type="text" placeholder='请输入登录密码'/>

            <button type='danger'>登录</button>

         <div className='openBoxSpan'>

             <span className='openLeft'><a href="javascript:;">短信验证码登录</a></span>
             <span className='openMiddle'><a href="javascript:;">忘记密码</a></span>
             <span className='openRight'><a href="javascript:;">新用户注册</a></span>
         </div>

        </section>;
    }
}

