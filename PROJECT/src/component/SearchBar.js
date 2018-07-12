import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Input, Icon} from 'antd'
import action from "../store/action";

const Search = Input.Search;

class SearchBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={'searchBar'}>
            <div className={'con-axis'}>
                <div className={'search-box'}>
                    <div className={'post-fix'}>北京<Icon type={'down'}></Icon></div>
                    <div className={'search-input'}>
                        <Search
                            placeholder="搜索明星、演唱会、场馆"
                            onSearch={this.searchFn}
                        />
                    </div>
                </div>
            </div>
        </div>
    }

    searchFn = (value) => {
            value = value.trim();
        if (value.length === 0) return;
        this.props.history.push(`/home/searchList?searchValue=${value}`);
    }
}

export default withRouter(connect( state=>state.home,action.home)(SearchBar));