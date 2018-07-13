import React from 'react';
import {connect} from 'react-redux'
import {Carousel} from 'antd'
import action from '../store/action/index'
class Banner extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    async componentDidMount(){
        let {queryBanner,bannerData}=this.props;
        if(!bannerData||bannerData.length===0){
            queryBanner();
        }
    }

    render() {
        let {bannerData}=this.props;
        return <div>
            <Carousel autoplay>
            {bannerData.map((item, index) => {
            let {pic}=item;
            return <div key={index}><img src={pic} width={'100%'} /></div>
            })}
            </Carousel>
        </div>
    }
}

export default connect(state => ({...state.home}), action.home)(Banner);