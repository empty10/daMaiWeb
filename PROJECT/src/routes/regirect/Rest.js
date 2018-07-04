import React from 'react';
import '../../static/css/rest.less'
import PloginOpen from '../../component/PloginOpen'
import {Icon} from 'antd'
export default class Rest extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flag:false
        }
    }
    render() {

        return <section className='regirectBox'>
            <div className='homeArea'><input type="text" placeholder='国家地区'/><span onClick={()=>{
          this.setState({
              flag:!this.state.flag
          })  }
            }>+86 <Icon type='down'></Icon>  </span></div>
            <div className='homeAttn'><input type="text" placeholder='请输入手机号'/></div>
            <div className='homeApon'><input type="text" placeholder='请输入验证码'/></div>
       <button type='danger'>同意协议并注册</button>
            <span>我已阅读接收 <a href="https://x.damai.cn/markets/app/agreement?spm=a211eg.10560647.0.0.M8u96P">《大麦网会员协议》</a> 及 <a
                href="https://x.damai.cn/markets/app/clause?spm=a211eg.10560647.0.0.VGUxUY">《隐私专项条款》</a> 并同意自动注册成会员</span>
            {this.state.flag?<PloginOpen/>:''}
        </section>;
    }
}