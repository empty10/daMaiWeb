import React from 'react';
import {connect} from 'react-redux';
import '../static/css/detail.less';

class Detail extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {

        return <div className='performBd'>
            <div className='headerBox'>
                <img src="../static/images/singer.jpg" alt=""/>
                <p className='title'>CHARLIE PUTH VOICENOTES TOUR HONG KONG </p>
                <p className='city'>香港</p>
                <p className='price'>
                    540-1350
                    <span className='priceUnit'>元</span>
                </p>
            </div>
            <div className='holdTime'>2018.11.04 20:00 </div>
            <div className='holdPlace'>亚洲国际博览馆 </div>
            <div className='info'>
                <h1 className='desTitle' > 介绍</h1>
                <div className='desShort'>Charlie Puth于11月4日假亚洲国际博览馆Hall 10举行只此一场的演出！</div>
                <div className='desMore'>
                    <a href=""> 更多图文详情</a>
                </div>
                <div className='noticeOfPurchase'>
                    <h1 className='noticeTitle'>购票须知</h1>
                    <div className='infoPurchase'>
                        <li className='noticeItem'>
                            <span className='noticeTitle'>演出时长</span>
                            <span className='noticeCont'>约120分钟（以现场时间为准）</span>
                        </li>
                    </div>
                    <div className='Notice_more'>
                        <a href=""> 更多图文详情</a>
                    </div>

                </div>
            </div>

        </div>;
    }
}

export default connect( )(Detail);