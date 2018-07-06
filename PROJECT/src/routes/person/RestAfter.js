import React from 'react';
import '../../static/css/RestAfter.less';
import '../../static/css/common.less'
import {Icon} from 'antd'
import {Link,Switch,Redirect,Route} from 'react-router-dom'
import PersonalList from "../restAfter/PersonalList";
import {queryLogOut} from "../../api/register";
import Person from "../Person";
import {withRouter}  from 'react-router-dom'
import {connect} from 'react-redux'
class RestAfter extends React.Component {
    render() {
        return <section className='restAfterBox'>
             <header className='headerBox'><div className='ImgsLogo'><img src="//perico.damai.cn/userheadphotos/540017/108003434.jpg" alt=""/></div><p>大麦</p></header>
            <ul>
                <Link to='/order/list'><li><Icon type='profile'></Icon><span>我的订单<Icon type='right'></Icon></span><div></div></li></Link>
                <a href="javascript:;"><li><Icon type='red-envelope'/><span>优惠卷<Icon type='right'></Icon></span><div></div></li></a>
                <Link to='/order/list'><li><Icon type='switcher'></Icon><span>我的票<Icon type='right'></Icon></span><div></div></li></Link>
                <Link to='/favorite/list'><li><Icon type='heart-o'></Icon><span>我想看的<Icon type='right'></Icon></span><div></div></li></Link>
                <a href="javascript:;"><li><Icon type='environment-o'></Icon><span>收货地址<Icon type='right'></Icon></span><div></div></li></a>
                <a href="javascript:;">  <li><Icon type='user'></Icon><span>常用购票人<Icon type='right'></Icon></span><div></div></li></a>
                    <a href="javascript:;"> <li><Icon type='edit'></Icon><span>意见反馈<Icon type='right'></Icon></span><div></div></li></a>
            </ul>
            <div className='restFooter' onClick={this.logOut}>退出登录</div>
        </section>;
        console.log(2);
    }
    logOut=async ()=>{
        let result=await queryLogOut();
        console.log(result);
        if(parseFloat(result.code)===0){
            this.props.history.push('/personal/login')
        }



    }
}

export default withRouter(connect()(RestAfter));