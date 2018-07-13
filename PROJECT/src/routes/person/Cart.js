import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import store from '../../store/index'
import action from '../../store/action/index'
import '../../static/css/Cart.less'
import {queryList} from '../../api/register'

class Cart extends React.Component {
    constructor(props,context) {
        super(props,context);

    }

  async componentDidMount(){
        let result=await queryList();
        if(parseFloat(result.code)===0){
           let {data}=result;
            this.data=data;
        }
    }
    render() {
      let {data=[]}=this;
        console.log(data);
        let {projectID,name,city,time,address,price,desc}=data;
        return <div className='myLovebox'>
            {data.map((item,index)=>{
                return <div>
                    <div className='picture'><img src={projectID} alt={name}/></div>
                    <div className='phone'>
                   <h3>{name}</h3>
                       <p>{time}</p>
                        <p>{address}</p>
                        <p>{price}</p>
                    </div>
                </div>



            })}
            {/*<div className='picture'><img src="" alt=""/>
            </div>
            <div className='infoList'>
                <p>演唱会名</p>
                <p>详情</p>
                <p>${price}</p>*/}
            </div>

    }
}

export default withRouter(connect(state=>({...state.buyNow}),action.buyNow)(Cart));