import React from 'react';
import {connect} from "react-redux";
import {Switch,Redirect,Route} from 'react-router-dom'

import LoginMess from './LoginMess'
import LoginOpen from './LoginOpen'
import Rest from './Rest'

import '../../static/css/common.less';
import '../../static/css/loginHeadBox.less';
import '../../static/css/PdragFooter.less';
import '../../static/css/loginMess.less'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import {queryLogin} from '../../api/register'

let dataFooter=[{id:86,title:'+86中国大陆地区'},{id:852,title:'+852中国香港地区'},{id:853,title:'+853中国澳门地区'},{id:886,title:'+886中国台湾地区'}];

class Login extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state={
            opacity:0,
            ID:86,
            userName:'',
            pwd:''
        }
    }
    render() {
        let {ID,userName,pwd}=this.state;
        return <section>
            <div className='loginHeadBox'>
                <img src="//gw.alicdn.com/tfs/TB1bx8NXlfH8KJjy1XbXXbLdXXa-300-138.png" alt=""/>
                <div className='phoneName clearfix'><span onClick={()=>{
                this.setState({
                    opacity:1
                })}
                }>+{ID}<Icon type='down'></Icon></span><input type="text" placeholder='请输入手机号码' className='phonePass' onKeyUp={(ev)=>{
                let target=ev.target,
                   resul=target.value;
                    this.setState({
                    userName:resul
                })
                    }

                }/></div></div>
            <div className='loginMessBox'>
                <input type="text" placeholder='请输入密码' onKeyUp={ev=>{
                  let target=ev.target,
                      res=target.value;
                  this.setState({
                      pwd:res
                  })

                }
                }/>
                <button type='danger' onClick={this.getValue}>登录</button>
                <div className='spanL'><span className='spanLeft'><a href="javascript:;">账号密码登录</a></span>
                    <span className='spanRight'><Link to='/personal/rest'>新用户注册</Link></span></div>
            </div>
            <div className='loginOpenBox clearfix' style={{opacity:this.state.opacity}}>
                <span className='spLeft'><a href="javascript:;" onClick={this.selectBootom}>取消</a></span>
                <span className='spRight'><a href="javascript:;" onClick={()=>{
                    this.setState({
                        opacity:0
                    })  }
                }>确定</a></span>
                <ul className='selectBottom'>
                    {dataFooter.map((item,index)=>{
                        let {id,title}=item;
                           return <li key={index} onClick={this.selectTop.bind(this,id)}>{title}</li>
                    })}
                </ul>
            </div>;
        </section>;
    }
    selectBootom=()=>{
        this.setState({
            opacity:0
        })
    };
    selectTop=(id)=>{
        this.setState({
            ID:id
        })
    };
    getValue=async ev=>{
       let result=await queryLogin();

    }
}

export default connect(state=>({...state.register}))(Login)







