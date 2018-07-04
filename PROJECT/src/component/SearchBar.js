import React from 'react';
import {connect} from 'react-redux'
import {Input,Icon} from 'antd'

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
                            onSearch={value => console.log(value)}
                            style={{ }}
                        />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default connect()(SearchBar);