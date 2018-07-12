import React from 'react';
import {connect} from 'react-redux';
import {Icon} from 'antd';

class ChooseOk extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className='panel'>
            <div className='panel-body'>
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
                            <Icon type="plus-square"/>
                            <span className='num'>1</span>
                            <Icon type="minus-square-o"/>
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
                选好了
            </div>
        </div>;
    }
}

export default connect()(ChooseOk);