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

    // async componentDidMount(){
    //     let {location:{search}}=this.props,
    //         {projectId=0}=Qs.parse(search.substr(1)||{});
    //     let result=await queryInfo(projectId);
    //     if(parseFloat(result.code)===0){
    //         this.setState({
    //             data:result.data
    //         })
    //     }
    // }

    render() {
        // let {data}=this.state;
        // if(!data) return'';
        // let {}=data;

        return <div className='perform'>
            <div className='performPage'>
                <div className='headerBox'>
                    <div className='bg'>
                        <div className='bg-blur'>
                        </div>
                    </div>
                    <div className='itemBox'>
                        <div className='pic'><img
                            src="https://pimg.dmcdn.cn/perform/project/1563/156385_n.jpg?_t=1530166503931?1530547884494"
                            alt=""/></div>
                        <p className='title'>CHARLIE PUTH VOICENOTES TOUR HONG KONG </p>
                        <p className='city'>香港</p>
                        <p className='price'>
                            540-1350
                            <span className='priceUnit'> 元</span>
                        </p>
                    </div>
                </div>
                <div className='deHoldTime'>
                    <div className='deLeft'>2018.11.04 20:00</div>
                </div>
                <div className='deHoldPlace'>亚洲国际博览馆</div>
                <div className='introduce'>
                    <h1 className='desTitle'> 介绍</h1>
                    <div className='desShort'>Charlie Puth于11月4日假亚洲国际博览馆Hall 10举行只此一场的演出！</div>
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
                            <span className='noticeCont'>约120分钟（以现场时间为准）</span>
                        </li>
                        <li className='noticeItem'>
                            <span className='noticeInfo'>入场时间</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='noticeCont'>演出前约30分钟</span>
                        </li>
                        <li className='noticeItem'>
                            <span className='noticeInfo'>限购说明</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='noticeCont'>选座购买每单限6张，立即购买每单限20张</span>
                        </li>
                        <li className='noticeItem'>
                            <span className='noticeInfo'>儿童说明</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='noticeCont'>1.2米以上凭成人票入场，1.2米以下谢绝入场</span>
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