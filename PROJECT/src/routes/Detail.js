import React from 'react';
import {connect} from 'react-redux';
import Qs from 'qs';
import '../static/css/detail.less';
import {Icon} from 'antd';
import {queryInfo} from '../api/product';

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state=null;
    }

    async componentDidMount(){
        let {location:{search}}=this.props,
            {projectId=0}=Qs.parse(search.substr(1)||{});
        let result=await queryInfo(projectId);
        if(parseFloat(result.code)===0){
            this.setState({
                data:result.data
            })
        }
    }

    render() {
        let {data}=this.state;
        if(!data) return'';
        let {name,time,city,address,price,pic,desc,duration,joinTime,limitDesc,explain}=data;

        return <div className='perform'>
            <div className='performPage'>
                <div className='headerBox'>
                    <div className='bg'>
                        <div className='bg-blur'>
                        </div>
                    </div>
                    <div className='itemBox'>
                        <div className='pic'><img src={pic}  alt=""/></div>
                        <p className='title'>{name} </p>
                        <p className='city'>{city}</p>
                        <p className='price'>
                            {price}
                            <span className='priceUnit'> 元</span>
                        </p>
                    </div>
                </div>
                <div className='deHoldTime'>
                    <div className='deLeft'>{time}</div>
                </div>
                <div className='deHoldPlace'>{address}</div>
                <div className='introduce'>
                    <h1 className='desTitle'> 介绍</h1>
                    <div className='desShort'>{desc}</div>
                    {/*<div className='desMore'>*/}
                        {/*<a href=""> 更多图文详情</a>*/}
                    {/*</div>*/}
                </div>
                <div className='noticeOfPurchase'>
                    <h1 className='noticeTitle'>购票须知</h1>
                    <div className='infoPurchase '>
                        <li className='noticeItem'>
                            <span className='noticeInfo'>演出时长</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='noticeCont'>{duration}</span>
                        </li>
                        <li className='noticeItem'>
                            <span className='noticeInfo'>入场时间</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='noticeCont'>{joinTime}</span>
                        </li>
                        <li className='noticeItem'>
                            <span className='noticeInfo'>限购说明</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='noticeCont'>{limitDesc}</span>
                        </li>
                        <li className='noticeItem'>
                            <span className='noticeInfo'>儿童说明</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='noticeCont'>{explain}</span>
                        </li>
                    </div>
                    {/*<div className='noticeMore'>*/}
                        {/*<a href=""> 更多购票须知</a>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className='navBottom'>
                <div className='wantSee'>
                    <Icon type='heart-o'/>
                    <br/>
                    <span className='desc'>想看</span>
                </div>
                <div className='purchaseNow'>
                    立即购买
                </div>
            </div>
        </div>;
    }
}

export default connect()(Detail);