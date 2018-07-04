import React from 'react';
import {connect} from 'react-redux';
import '../static/css/showtimes.less';
import {Icon} from 'antd';

class ShowsTime extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {
        return <div className='panel'>
            <div className='panel-body'>
                <span className='detail_Time'>时间</span>
                <div className='time-option'>
                    <div className='dateTime'>11.04周日</div>
                </div>

                <div className='detail_show'>场次</div>
                <div className='show_option'>
                    <div className='showTime'>20:00</div>
                </div>

                <div className='seat'>选择价格</div>
                <div className='seat_option'>
                    <div className='seatClass'>880</div>
                    <div className='seatClass'>890</div>
                </div>
                <div className="quantity">
                    <div className='chooseQuantity'>选择张数</div>
                    <div className='chooseTable'>
                        <div className='chooseType'>880</div>
                        <div className='plusReduce'>
                            <Icon type="plus-square" />
                            <span className='num'>1</span>
                            <Icon type="minus-square-o" />
                        </div>
                    </div>
                </div>
                <div className='panel-total'>
                    <div className='sum'>
                        总价格
                    </div>
                    <div className='priceTable'>
                        <span className='price'>880</span>
                        &nbsp;&nbsp;
                        <span className='unit'>元</span>
                    </div>
                </div>
            </div>

            <div className='panel-footer'>
                立即购买
            </div>
        </div>;
    }
}

export default connect( )(ShowsTime);