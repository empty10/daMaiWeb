import React from 'react';
import {connect} from 'react-redux';
import '../static/css/buynow.less';
import {Icon} from 'antd';
import {queryInfo, buyNow, payNow} from "../api/product";
import Qs from "qs";
import action from "../store/action";
import store from "../store";

class BuyNow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            count: 1
        }
    }

    async componentDidMount() {
        // let {price}=this.props.detail.data;
        console.log(this.props);
        let {location: {search}, timeSelected} = this.props,
            {projectId = 0} = Qs.parse(search.substr(1) || {});
        this.projectId = projectId; //把产品ID挂载到实例上
        let result = await buyNow(projectId);
        if (parseFloat(result.code) === 0) {
            this.setState({
                data: result.data,
            })
        }
    }

    render() {
        let {data, count, price} = this.state;
        let resD = null, resF = null, resP = null;

        return <div className='panel'>
            <div className='panel-body'>
                <span className='detail_Time'>时间</span>
                <div className='time-option'>
                    {
                        data.map((item, index) => {
                            return <div className={'dateTime'} key={index}
                                        onClick={this.handleTimeClick}>
                                {item.time}</div>
                        })
                    }
                </div>
                <div className='detail_field'>场次</div>
                <div className='field_option'>
                    {
                        data.map((item, index) => {
                            return <div className={'fieldTime'} key={index}
                                        onClick={this.handleFieldClick}>{item.field}</div>
                        })
                    }
                </div>
                <div className='seat'>选择价格</div>
                <div className='seat_option'>
                    <div className='seatClass' onClick={this.handlePriceClick}>880</div>
                </div>
                <div className="quantity">
                    <div className='chooseQuantity'>选择张数</div>
                    <div className='chooseTable'>
                        <div className='chooseType'>880</div>
                        <div className='plusReduce'>
                            <Icon type='minus-square-o' style={{color: count === 1 ? '#636363' : ''}}
                                  onClick={this.reduceClick}/>
                            <span className='num'>{count}</span>
                            <Icon type='plus-square-o' style={{color: count === 6 ? '#636363' : ''}}
                                  onClick={this.plusClick}/>
                        </div>
                    </div>
                </div>
                <div className='panel-total'>
                    <div className='sum'>
                        总价格
                    </div>
                    <div className='priceTable'>
                        <span className='price'>{880 * count}</span>
                        &nbsp;&nbsp;
                        <span className='unit'>元</span>
                    </div>
                </div>
            </div>
            <div className='panel-footer' onClick={this.handleOrder}>
                立即付款
            </div>
        </div>;
    }

    plusClick = () => {
        if (this.state.count < 6) {
            this.setState({
                count: this.state.count + 1
            })
        }
    };
    reduceClick = () => {
        if (this.state.count > 1) {
            this.setState({
                count: this.state.count - 1
            })
        }
    };
    handleTimeClick = async ev => {
        let target = ev.target;
        console.log(target.innerHTML);
        target.isSelected = !(target.isSelected);
        target.className = `dateTime ${target.isSelected === true ? 'active' : ''}`;
        this.resD = target.innerHTML;
    };
    handleFieldClick = async ev => {
        let target = ev.target;
        console.log(target.innerHTML);
        target.isSelected = !(target.isSelected);
        target.className = `fieldTime ${target.isSelected === true ? 'active' : ''}`;
        this.resF = target.innerHTML;
    };
    handlePriceClick = async ev => {
        let target = ev.target;
        console.log(target.innerHTML);
        target.isSelected = !(target.isSelected);
        target.className = `seatClass ${target.isSelected === true ? 'active' : ''}`;
        return target.innerHTML;
    };


    handleOrder = async () => {
        let id = this.projectId,
            count = this.state.count,
            time=this.resF;
        console.log(time);
        let date = this.resD.substr(0, 5),
            weekday = this.resD.substr(6, 2);

        let objPay = {id, date,time , weekday, count};
        console.log(date);
        let result = await payNow(objPay);
        if (parseFloat(result.code) === 0) {
            alert('恭喜您已经订购成功！')
        } else {
            alert('很遗憾，订购失败！请您重新下单，谢谢！')
        }
    }
}

export default connect(state => state.buyNow, action.buyNow)(BuyNow);