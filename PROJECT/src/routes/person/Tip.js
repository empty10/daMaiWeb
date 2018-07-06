import React from 'react';
import {withRouter} from 'react-router-dom'
class Tip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
           <button onClick={()=>{
           this.props.history.push('/personal/login')}
           }>登录</button>
           <button onClick={()=>{
           this.props.history.push('/personal/person')}
           }>注册</button>
        </div>;
    }
}
export default withRouter(Tip)