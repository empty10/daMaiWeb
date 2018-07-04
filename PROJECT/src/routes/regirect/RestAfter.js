import React from 'react';
import '../../static/css/RestAfter.less';
import '../../static/css/common.less'
import {Icon} from 'antd'
import {Link,Switch,Redirect,Route} from 'react-router-dom'
import PersonalList from "../restAfter/PersonalList";
export default class RestAfter extends React.Component {
    render() {
        return <section className='restAfterBox'>
             <header className='headerBox'><div className='ImgsLogo'><img src="//perico.damai.cn/userheadphotos/540017/108003434.jpg" alt=""/></div><p>大麦</p></header>
            <ul>
                <Link to='/personal/list'><li><Icon type='profile'></Icon><span>我的订单<Icon type='right'></Icon></span><div></div></li></Link>
                <li><Icon type='red-envelope'/><span>优惠卷<Icon type='right'></Icon></span><div></div></li>
                <li><Icon type='switcher'></Icon><span>我的票<Icon type='right'></Icon></span><div></div></li>
                <li><Icon type='heart-o'></Icon><span>我想看的<Icon type='right'></Icon></span><div></div></li>
                <li><Icon type='environment-o'></Icon><span>收货地址<Icon type='right'></Icon></span><div></div></li>
                <li><Icon type='user'></Icon><span>常用购票人<Icon type='right'></Icon></span><div></div></li>
                <li><Icon type='edit'></Icon><span>意见反馈<Icon type='right'></Icon></span><div></div></li>
            </ul>
            <div className='restFooter'>退出登录</div>




        </section>;
    }
}