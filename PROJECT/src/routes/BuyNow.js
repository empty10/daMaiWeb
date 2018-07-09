import React from 'react';
import {connect} from 'react-redux';
import '../static/css/buynow.less';
import {Icon} from 'antd';
import {queryInfo, buyNow, payNow} from "../api/product";
import Qs from "qs";
import action from "../store/action";

class BuyNow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            timeSelected: false,
            fieldSelected:false
        }
    }

    async componentDidMount() {
        let {location: {search}, timeSelected} = this.props,
            {projectId = 0} = Qs.parse(search.substr(1) || {});
        this.projectId = projectId; //把产品ID挂载到实例上
        let result = await buyNow(projectId);
        console.log(result);
        if (parseFloat(result.code) === 0) {
            this.setState({
                data: result.data,
                timeSelected
            })
        }
    }

    render() {
        let {data, timeSelected,fieldSelected} = this.state;

        return <div className='panel'>
            <div className='panel-body'>
                <span className='detail_Time'>时间</span>
                <div className='time-option'>
                    {
                        data.map((item, index) => {
                            return <div className={`dateTime${timeSelected === true ? ' active' : ''}`}                                           key={index}
                                        onClick={this.handleTimeClick}>{item.time}</div>
                        })
                    }
                </div>
                <div className='detail_field'>场次</div>
                <div className='field_option'>
                    {
                        data.map((item, index) => {
                            return <div className={`fieldTime${fieldSelected === true ? ' active' : ''}`}                                          key={index}
                                        onClick={this.handleFieldClick}>{item.field}</div>
                        })
                    }
                </div>

                {/*<div className='seat'>选择价格</div>*/}
                {/*<div className='seat_option'>*/}
                {/*<div className='seatClass'>880</div>*/}
                {/*<div className='seatClass'>890</div>*/}
                {/*</div>*/}
                {/*<div className="quantity">*/}
                {/*<div className='chooseQuantity'>选择张数</div>*/}
                {/*<div className='chooseTable'>*/}
                {/*<div className='chooseType'>880</div>*/}
                {/*<div className='plusReduce'>*/}
                {/*<Icon type="plus-square"/>*/}
                {/*<span className='num'>1</span>*/}
                {/*<Icon type="minus-square-o"/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className='panel-total'>*/}
                {/*<div className='sum'>*/}
                {/*总价格*/}
                {/*</div>*/}
                {/*<div className='priceTable'>*/}
                {/*<span className='price'>880</span>*/}
                {/*&nbsp;&nbsp;*/}
                {/*<span className='unit'>元</span>*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>

            <div className='panel-footer' onClick={this.handleOrder}>
                立即付款
            </div>
        </div>;
    }

    handleTimeClick = async ev => {
        let target = ev.target,
            tarName = target.key;
        console.log(target);
        // if (tarName === 'dateTime') {
        if (this.state.timeSelected) {
            this.setState({
                timeSelected: false
            });
            console.log(1);
            return;
        }
        this.setState({
            timeSelected: true
        });
        // }
    };
    handleFieldClick = async ev => {
        let target = ev.target,
            tarName = target.key;
        console.log(target);
        // if (tarName === 'dateTime') {
        if (this.state.fieldSelected) {
            this.setState({
                fieldSelected: false
            });
            console.log(1);
            return;
        }
        this.setState({
            fieldSelected: true
        });
        // }
    };

    handleOrder = async ev => {
        let result = await payNow();
        if (parseFloat(result.code) === 0) {
            alert('恭喜您已经订购成功！')
        } else {
            alert('很遗憾，订购失败！请重新下单吧！')
        }
    }
}

export default connect(state => state.buyNow, action.buynow)(BuyNow);