import React from 'react';
import {connect} from 'react-redux';
import '../static/less/home.less';
import action from '../store/action/index'

class CellList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let {name, city, time, address, price, desc,tag, pic} = this.props.showData;
        return <div className={'list-unit'}>
            <img className={'pic-cell'}
                 src={pic}/>
            <div className={'info-cell'}>
                <p className={'title-cell'}>{name}</p>
                <p>{time} | {city}</p>
                <p className={'tag-cell'}><span>{tag}</span></p>
                <p className={'price-cell'}><span>{price}</span>元</p>
                <p className={'intro-cell'}>{desc}</p>
            </div>
        </div>
    }
}

export default  connect(state=>state.home, action.home)(CellList);