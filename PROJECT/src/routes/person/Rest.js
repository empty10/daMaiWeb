import React from 'react';
import '../../static/css/rest.less'
import {Icon} from 'antd'
import {queryRegister} from '../../api/register'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


let dataFoot=[{id:86,title:'+86中国大陆地区'},{id:852,title:'+852中国香港地区'},{id:853,title:'+853中国澳门地区'},{id:886,title:'+886中国台湾地区'}]
class Rest extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flag:false,
            ID1:86,
            register:{userName:'',passward:''}
        }
    }

    checkRegister= async ()=>{
      let result=await queryRegister(this.state.register)
          if(parseFloat(result.code)){
           this.props.history.push('/personal/login')
          }
    }

    render() {
        let {register:{userName,passward}}=this.state;
        return <section className='regirectBox'>
            <div className='homeArea'><input type="text" placeholder='国家地区'/><span onClick={()=>{
          this.setState({
              flag:!this.state.flag
          })  }
            }>+{this.state.ID1} <Icon type='down'></Icon>  </span></div>
            <div className='homeAttn'><input type="text" placeholder='请输入手机号' onKeyUp={ev=>{
            let phoneM=ev.target.value;
            this.setState({
                userName:phoneM
            }) }
            }/></div>
            <div className='homeApon'><input type="text" placeholder='请输入验证码' onKeyUp={ev=>{
            let phoneP=ev.target.value;
            this.setState({
                passward:phoneP
            })}
            }/></div>
       <button type='danger' onClick={this.checkRegister
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
            </div>:''}
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
export default connect()(Rest)