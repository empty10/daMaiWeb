import React from 'react';
import '../../static/css/rest.less'
import {queryRegister} from '../../api/register'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import md5 from 'blueimp-md5';
import {Form, Icon, Button, Input, Row, Col, Modal} from 'antd';
import action from "../../store/action";

const FormItem = Form.Item;
let dataFoot=[{id:86,title:'+86中国大陆地区'},{id:852,title:'+852中国香港地区'},{id:853,title:'+853中国澳门地区'},{id:886,title:'+886中国台湾地区'}];
function loginFail() {
    const modal = Modal.error({
        title: '注册失败',
        content: '请稍后重新尝试!',
    });
    setTimeout(() => modal.destroy(), 2000);
}

class Rest extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flag:true,
            ID:86
        }

    }
    handleSubmit = ev => {
        ev.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                values.pwd = md5(values.pwd);
                let result = await queryRegister(values);
                console.log(result);
                if (parseFloat(result.code) === 0) {
                    this.props.history.go(-1);
                    return;
                }
                loginFail();
            }
        });
    };
/*
       checkregister= async ()=>{
           this.state.payload.pwd=md5(this.state.payload.pwd);
           let result=await queryRegister(this.state.payload);
           console.log(result);
           if(parseFloat(result.code)===0){
                   this.props.history.push('/personal/login');
                   return;
               }
               if(parseFloat(result.code)===1){
                   loginFail();
               }

       }*/
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            }
        };

        return <section className='regirectBox'>
            {/*<div className='homeArea'><input type="text" placeholder='国家地区'/><span onClick={()=>{
          this.setState({
              flag:!this.state.flag
          })  }
            }>+{this.state.ID1} <Icon type='down'></Icon>  </span></div>
            <div className='homeAttn'><input type="text" placeholder='请输入手机号'
            /></div>
            <div className='homeApon'><input type="text" placeholder='请输入密码'
            /></div>
       <button type='danger' onClick={this.checkregister
       }>同意协议并注册</button>
            <span>我已阅读接收 <a href="https://x.damai.cn/markets/app/agreement?spm=a211eg.10560647.0.0.M8u96P">《大麦网会员协议》</a> 及 <a
                href="https://x.damai.cn/markets/app/clause?spm=a211eg.10560647.0.0.VGUxUY">《隐私专项条款》</a> 并同意自动注册成会员</span>
            {this.state.flag?  <div className='loginOpenBox clearfix' style={{opacity:this.state.opacity}}>
                <span className='spLeft'><a href="javascript:;" onClick={this.selectBootom}>取消</a></span>
                <span className='spRight'><a href="javascript:;" onClick={()=>{
                    this.setState({
                        flag:!this.state.flag
                    })  }
                }>确定</a></span>
                <ul className='selectBottom'>
                    {dataFoot.map((item,index)=>{
                        let {id,title}=item;
                        return <li key={index} onClick={this.selectTop1.bind(this,id)}>{title}</li>
                    })}
                </ul>
            </div>:''}*/}
            <div className='homeArea'><Input type="text" placeholder='国家地区'/><span onClick={()=>{
                this.setState({
                    flag:!this.state.flag
                })  }
            }>+{this.state.ID1} <Icon type='down'></Icon></span></div>
            <Form onSubmit={this.handleSubmit}>
               {/* <FormItem {...formItemLayout} label='用户名'>
                    {getFieldDecorator('name', {
                        rules: [
                            {required: true, message: '请输入用户名!'}
                        ]
                    })(<Input/>)}
                </FormItem>*/}
               {/* <FormItem {...formItemLayout} label='邮箱'>
                    {getFieldDecorator('email', {
                        rules: [
                            {required: true, message: '请输入邮箱!'},
                            {type: 'email', message: '输入的邮箱格式不正确!'}
                        ]
                    })(<Input/>)}
                </FormItem>
*/}
                <FormItem {...formItemLayout} label='手机'>
                    {getFieldDecorator('userName', {
                        rules: [
                            {required: true, message: '请输入手机号!'}
                        ]
                    })(<Input/>)}
                </FormItem>
                <FormItem {...formItemLayout} label='密码'>
                    {getFieldDecorator('pwd', {
                        rules: [
                            {required: true, message: '请输入密码!'}
                        ]
                    })(<Input type='password'/>)}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">立即注册</Button>
                </FormItem>
            </Form>
            <span>我已阅读接收 <a href="https://x.damai.cn/markets/app/agreement?spm=a211eg.10560647.0.0.M8u96P">《大麦网会员协议》</a> 及 <a
                href="https://x.damai.cn/markets/app/clause?spm=a211eg.10560647.0.0.VGUxUY">《隐私专项条款》</a> 并同意自动注册成会员</span>
            {this.state.flag?  <div className='loginOpenBox clearfix' style={{opacity:this.state.opacity}}>
                <span className='spLeft'><a href="javascript:;" onClick={this.selectBootom}>取消</a></span>
                <span className='spRight'><a href="javascript:;" onClick={()=>{
                    this.setState({
                        flag:!this.state.flag
                    })  }
                }>确定</a></span>
                <ul className='selectBottom'>
                    {dataFoot.map((item,index)=>{
                        let {id,title}=item;
                        return <li key={index} onClick={this.selectTop1.bind(this,id)}>{title}</li>
                    })}
                </ul>
            </div>:''}}



        </section>;
    }
    selectBootom=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }
    selectTop1=(id)=>{
        this.setState({
            ID1:id,

        })
    }
}
export default Form.create()(connect(null,action.person)(Rest));