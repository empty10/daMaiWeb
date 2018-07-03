import React from 'react';
import {connect} from "react-redux"
import '../static/css/loginHeadBox.less'
import { Icon } from 'antd';

/*
const InputGroup = Input.Group;
const Option = Select.Option;
const options = [{
    value: '+86',
    label: '+86',

}, {
    value: '+852',
    label: '+852',
},
    {
        value:'+853',
        label:'+853'
    },{
    value:'+886',
        label:'+886'
    }];
*/

export default class PloginHead extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {
        return <section className='loginHeadBox'>
            <img src="//gw.alicdn.com/tfs/TB1bx8NXlfH8KJjy1XbXXbLdXXa-300-138.png" alt=""/>
            <div className='phoneName clearfix'><span>+86<Icon type={'down'}></Icon></span><input type="text" placeholder='请输入手机号码'/></div>
            {/*<InputGroup compact>
                <Select defaultValue="+86">
                    <Option value="+86">+86</Option>
                    <Option value="+852">+852</Option>
                </Select>
                <Input style={{ width: '50%' }} defaultValue="请输入手机号码" />
            </InputGroup>*/}

        </section>;
    }
}
