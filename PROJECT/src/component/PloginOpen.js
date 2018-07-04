import React from 'react';
import {connect} from "react-redux";
import '../static/css/PdragFooter.less'
import {Link} from 'react-router-dom'

export default class LoginFooter extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state={
            opacity:1
        }
    }

    render() {
        return <section className='loginOpenBox clearfix' style={{opacity:this.state.opacity}}>
              <span className='spLeft'><a href="javascript:;" onClick={this.selectBootom}>取消</a></span>
              <span className='spRight'><a href="javascript:;" onClick={()=>{
            this.setState({
                opacity:0
            })  }
              }>确定</a></span>
            <ul className='selectBottom'>
                <li>+86中国大陆地区</li>
                <li>+852中国香港地区</li>
                <li>+853中国澳门地区</li>
                <li>+886中国台湾地区</li>
            </ul>
        </section>;
    }
    //=>下拉框
    selectBootom=()=>{
       this.setState({
           opacity:0
       })
    }
}
