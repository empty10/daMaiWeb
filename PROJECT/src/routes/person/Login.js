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
import {Form, Icon, Input, Button, Checkbox, Modal} from 'antd';
import {queryLogin} from '../../api/register'
import md5 from 'blueimp-md5'
import {withRouter} from 'react-router-dom'
const FormItem = Form.Item;
let dataFooter=[{id:86,title:'+86中国大陆地区'},{id:852,title:'+852中国香港地区'},{id:853,title:'+853中国澳门地区'},{id:886,title:'+886中国台湾地区'}];

function loginFail() {
    const modal = Modal.error({
        title: '登录失败',
        content: '请稍后重新尝试!',
    });
    setTimeout(() => modal.destroy(), 2000);
}

class Login extends React.Component {
    constructor(props,context) {
        super(props,context);
       /* this.state={
            opacity:0,
            ID:86,
            payload:{userName:'',pwd:''}
        }*/
    }
    handleSubmit = ev => {
        ev.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {

                values.pwd = md5(values.pwd);
                console.log(values);
                let result = await queryLogin(values);
                     console.log(result);
                if (parseFloat(result.code) === 0) {
                    this.props.history.push('/personal/restafter');
                    return;
                }
                loginFail();
            }
        });
    };
   /* render() {
        let {ID,payload}=this.state,
            {userName,pwd}=payload;
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
                    console.log(resul);
                    this.setState({
                    userName:resul
                })
                    console.log(userName);
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
    }*/
    render() {
        const {getFieldDecorator} = this.props.form;
        return <div className='personLoginBox'>
            <div className='loginHeadBox'>
                <img src="//gw.alicdn.com/tfs/TB1bx8NXlfH8KJjy1XbXXbLdXXa-300-138.png" alt=""/>
               {/* <div className='phoneName clearfix'><span onClick={()=>{
                    this.setState({
                        opacity:1
                    })}
                }><Icon type='down'></Icon></span><input type="text" placeholder='请输入手机号码' className='phonePass'/></div>*/}</div>
            <Form onSubmit={this.handleSubmit} className="login-form" style={{margin:'.2rem'}}>
                <FormItem>
                    {getFieldDecorator('userName', {})(<Input prefix={<Icon type="user"/>} placeholder="用户名!"/>)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('pwd', {})(
                        <Input prefix={<Icon type="lock"/>} placeholder="密码!"
                               type="password"/>)}
                </FormItem>
                <FormItem>
                    <Button type="danger" htmlType="submit" className="login-form-button">登录</Button>
                    Or <Link to='/personal/person'>注册</Link>
                </FormItem>
            </Form>
        </div>;
    }
   /* selectBootom=()=>{
        this.setState({
            opacity:0
        })
    };
    selectTop=(id)=>{
        this.setState({
            ID:id
        })
    };*/
    /*getValue=async ev=>{
        let {payload}=this.state,
            {userName,pwd}=payload;
                 pwd=md5(pwd);
            let result=await queryLogin(payload);
        console.log(result);
        if(parseFloat(result.code)===0){
                this.props.history.push('/personal')
            }
        this.props.history.push('/personal')
    }*/
}

export default Form.create()(withRouter(connect(state=>({...state.register}))(Login)))







