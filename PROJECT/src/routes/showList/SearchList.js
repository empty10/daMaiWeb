import React from 'react';
import {connect} from 'react-redux'
import {Menu, Icon} from 'antd'
import Qs from 'qs';
import {Link, withRouter} from 'react-router-dom'
import action from '../../store/action/index'
import {querySearch} from '../../api/home'
import SearchBar from '../../component/SearchBar'
import CellList from '../../component/CellList'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ListShow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            searchShowData: []
        }
    }

    async componentDidMount() {
        let {location: {search}} = this.props,
            {searchValue} = Qs.parse(search.substr(1)) || {};
        let result = await  querySearch(searchValue),
            {data} = result;
        this.setState({searchShowData: data});
    }

    render() {
        let searchShowData = this.state.searchShowData;
        return <div>
            <SearchBar/>
            <div className={'con-axis fixTop'}>
                {
                    this.state.searchShowData.length === 0 ? (<div style={{
                        textAlign: 'center',
                        paddingTop: '.4rem'
                    }}><p>暂时没有相关活动</p></div>) : searchShowData.map((item, index) => {
                        let {projectId
                        } = item;
                        return <Link to={{
                            pathname: '/home/list/info',
                            search: `?projectId=${projectId}`
                        }}><CellList key={index} showData={item}/></Link>
                    })
                }
            </div>
        </div>
    }
}

export default withRouter(connect(state => state.home, action.home)(ListShow));