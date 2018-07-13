import React from 'react';
import {withRouter} from 'react-router-dom'
import {Button,Alert} from 'antd'
import '../../static/css/Tip.less'
class Tip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='Tipbox'>
            <Alert
                message="温馨提示"
                description="您当前还未登录，请登录"
                type="warning"
                className='dankuang'
            />
            <div className='tipButton'>
                <Button type='primary' onClick={()=>{
                    this.props.history.push('/personal/login')}
                }>登录</Button>
                <Button type='primary' onClick={()=>{
                    this.props.history.push('/personal/person')}
                }>注册</Button>
            </div>
        </div>;
    }
}
export default withRouter(Tip)