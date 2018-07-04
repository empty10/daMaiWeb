import React from 'react';
import {connect} from 'react-redux'
import {Menu,Icon} from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class ListShow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            current:false
        }
    }

    render() {
        return<div>
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail">全部
                </Menu.Item>
            </Menu>
            <div className={'con-axis'}>
                <div className={'list-unit'}>
                    <img className={'pic-cell'} src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                    <div className={'info-cell'}>
                        <p className={'title-cell'}>小雨姐姐的开心童话故事会：</p>
                        <p>2018.07.07-07.08 | Blue Note Beijing</p>
                        <p className={'tag-cell'}><span>标签</span></p>
                        <p className={'price-cell'}><span>230</span>元</p>
                        <p className={'intro-cell'}>四重奏组成立三十五周年纪念，上演震撼人心的贝多芬全部弦乐系列作品</p>
                    </div>
                </div>
                <div className={'list-unit'}>
                    <img className={'pic-cell'} src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                    <div className={'info-cell'}>
                        <p className={'title-cell'}>小雨姐姐的开心童话故事会：</p>
                        <p>2018.07.07-07.08 | Blue Note Beijing</p>
                        <p className={'tag-cell'}><span>标签</span></p>
                        <p className={'price-cell'}><span>230</span>元</p>
                        <p className={'intro-cell'}>四重奏组成立三十五周年纪念，上演震撼人心的贝多芬全部弦乐系列作品</p>
                    </div>
                </div>
                <div className={'list-unit'}>
                    <img className={'pic-cell'} src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                    <div className={'info-cell'}>
                        <p className={'title-cell'}>小雨姐姐的开心童话故事会：</p>
                        <p>2018.07.07-07.08 | Blue Note Beijing</p>
                        <p className={'tag-cell'}><span>标签</span></p>
                        <p className={'price-cell'}><span>230</span>元</p>
                        <p className={'intro-cell'}>四重奏组成立三十五周年纪念，上演震撼人心的贝多芬全部弦乐系列作品</p>
                    </div>
                </div>
                <div className={'list-unit'}>
                    <img className={'pic-cell'} src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                    <div className={'info-cell'}>
                        <p className={'title-cell'}>小雨姐姐的开心童话故事会：</p>
                        <p>2018.07.07-07.08 | Blue Note Beijing</p>
                        <p className={'tag-cell'}><span>标签</span></p>
                        <p className={'price-cell'}><span>230</span>元</p>
                        <p className={'intro-cell'}>四重奏组成立三十五周年纪念，上演震撼人心的贝多芬全部弦乐系列作品</p>
                    </div>
                </div>
            </div>
        </div>
    }
    handleClick=()=>{
        console.log(1);
    }
}

export default connect()(ListShow);