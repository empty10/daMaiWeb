import React from 'react';
import {connect} from 'react-redux'
import {Menu, Icon} from 'antd'
import Qs from 'qs';
import {Link} from 'react-router-dom'
import action from '../../store/action/index'
import {queryActivityData} from '../../api/home'
import CellList from "../../component/CellList"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class ListShow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            moveLeft: 0,
            current: '3',
            filterData: []
        }
    }

    componentDidMount() {
        let {location: {search}} = this.props,
            {flagType = 1} = Qs.parse(search.substr(1)) || {};
        this.switchData(flagType);
    }

    componentWillUpdate(nextProps, nextState) {
        // const mainW = this.refs.navBar.clientWidth / 100;
        // this.mainW = mainW;
        if (nextState.moveLeft > 0) {
            this.setState({
                moveLeft: 0
            })
        }
        if (Math.abs(nextState.moveLeft) > ((1 * this.props.navList.length) - 4.14)) {
            this.setState({
                moveLeft: -((1 * this.props.navList.length) - 4.14)
            })
        }
    }
    componentDidUpdate(){
        // console.log(this.state.current);
        // this.switchData(parseFloat(this.state.current));
    }
    componentWillReceiveProps(){
        // console.log(this.state.current);
        // this.switchData(parseFloat(this.state.current));
    }

    switchData = async (flagType) => {
        let filterData = {}, curIndex = 0;
        switch (parseFloat(flagType)) {
            case 1:
                curIndex = 8;
                filterData = this.props.activityData;
                break;
            case 2:
                curIndex = 5;
                filterData = this.props.overseaData;
                break;
            case 3:
                curIndex = 1;
                filterData = this.props.concertData;
                break;
            case 4:
                curIndex = 2;
                filterData = this.props.activityData;
                break;
            case 5:
                curIndex = 4;
                filterData = this.props.activityData;
                break;
            case 6:
                curIndex = 7;
                filterData = this.props.activityData;
                break;
            case 7:
                curIndex = 6;
                filterData = this.props.activityData;
                break;
            case 8:
                curIndex = 3;
                filterData = this.props.activityData;
                break;
        }
        let {limit, page} = filterData;
        let result = await queryActivityData({
            type: flagType,
            limit,
            page
        });
        this.setState({
            filterData: result.data,
            current: parseFloat(flagType) + ''
        });
    };

    handleClick = (e) => {
        let curIndex= e.item.props.curIndex;
        let current=e.key;
        this.setState({
            current,
            moveLeft: `-${1 * (curIndex-2)}`
        });
        this.switchData(parseFloat(current));
    };


    render() {
        let {navList} = this.props;
        let styleObj = {
            width: `${1 * navList.length}rem`,
            transition: 'all .5s',
            left: `${this.state.moveLeft}rem`
        };
        if (this.state.filterData.length === 0) return '';
        return <div>
            <div className={'nav-row'} ref={'navBar'}>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    className={'nav-abs'}
                    defaultSelectedKeys={'1'}
                    style={styleObj}
                >{this.props.navList.map((item, index) => {
                    let {index: curIndex, type, tagName} = item;
                    return <Menu.Item key={type} curIndex={curIndex}>
                        {item.tagName}
                    </Menu.Item>
                })}
                </Menu>
            </div>
            <div className={'con-axis'}>
                {this.state.filterData.map((item, index) => {
                    return <Link to={{
                        pathname: '/home/list/info',
                        search: `?projectId=${item.projectId}`
                    }}><CellList key={index} showData={item}/></Link>
                })}
            </div>
        </div>
    }
}

export default connect(state => state.home, action.home)(ListShow);