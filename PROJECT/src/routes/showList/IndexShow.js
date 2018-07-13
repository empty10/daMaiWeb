import React from 'react';
import {connect} from 'react-redux'

import SearchBar from '../../component/SearchBar'
import Banner from '../../component/Banner'
import NavFixed from '../../component/NavFixed'
import {Link, withRouter} from 'react-router-dom'
import {Icon} from 'antd';
import action from "../../store/action";


class IndexShow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isChange: true,
            isMore: false
        }
    }

    async componentDidMount() {
        let {activityData, showActivity, overseaData, showOversea, concertData, showConcert, likeListData, showLikeList} = this.props;
        if (activityData.data.length === 0) {
            showActivity();
        }
        if (overseaData.data.length === 0) {
            showOversea();
        }
        if (concertData.data.length === 0) {
            showConcert();
        }
        if (likeListData.data.length === 0) {
            showLikeList();
        }
    }

    componentWillReceiveProps() {
        this.setState({isMore: false});
    }

    componentWillUpdate(nextProps, nextState) {
        window.onscroll = () => {
            let winH = document.documentElement.clientHeight || document.body.clientHeight,
                pageH = document.documentElement.scrollHeight || document.body.scrollHeight,
                nowH = document.documentElement.scrollTop || document.body.scrollTop;
            if (nowH > (pageH - winH - 100)) {
                if (nextState.isMore) return;
                this.setState({isMore: true});
                let {likeListData, showLikeList} = nextProps;
                if (likeListData.page >= likeListData.total) return;
                showLikeList({
                    page: likeListData.page + 1
                });
            }
        }
    }

    handleChange = () => {
        let {concertData, showConcert} = this.props;
        if (!this.state.isChange) return;
        this.setState({isChange: true});
        let {page, total, limit} = concertData;
        // let changePage = Math.floor(Math.random() * (parseFloat(total) - parseFloat(page)) + parseFloat(page));
        let changePage = Math.floor(Math.random() * 9 + 1);
        showConcert({
            page: changePage
        });
    };

    render() {
        let {activityData, overseaData, concertData, likeListData} = this.props,
            {data: actData} = activityData,
            {data: conData} = concertData,
            {data: LikeData} = likeListData;
        if (actData.length === 0) return '';
        if (overseaData.data.length === 0) return '';
        if (conData.length === 0) return '';
        if (LikeData.length === 0) return '';
        return <div className={'con-axis fixTop fixBottom'}>
            <SearchBar/>
            <Banner/>
            <NavFixed/>
            <div className={'category-box clearfix'}>
                {this.props.navList.map((item, index) => {
                    let {index: navIndex, type, tagName} = item;
                    return <Link to={{
                        pathname: '/home/list',
                        search: `?flagType=${type}&tag=${tagName}`
                    }} key={index} className={'categ-unit'}>
                        <i className={`navIcon0${navIndex}`}></i>
                        <span>{tagName}</span>
                    </Link>
                })}

            </div>
            <div className={'ban-adv'}
                 style={{backgroundImage: 'url("https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg")'}}></div>
            {/*热门活动*/}
            <div className={'hot-act-box'}>
                <div className={'hot-act-row'}>
                    <div className={'dbl-unit narrate-mask'}>
                        <img src={actData[0]['pic']}/>
                        <div className={'narrate'}>
                            <p className={'post-li'}><span>北京|大家都在看</span></p>
                            <p className={'city-li'}>{actData[0]['city']}</p>
                            <p className={'collect-li'}><i className={'iconfont icon-faxian-yanjing'}></i> 12.3万</p>
                        </div>
                    </div>
                    <div className='unit-oth'><img
                        src={actData[1]['pic']}/>
                    </div>
                </div>
                <div className={'hot-act-row'}>
                    {actData.slice(2, 5).map((item, index) => {
                        let {projectId, pic, tag} = item;
                        return <div key={index} className={'unit'}>
                            <Link to={{
                                pathname: '/home/Detail',
                                search: `?projectId=${projectId}`
                            }}>
                            <img src={pic}/>
                            <p>{tag}</p>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
            {/*海外现场*/}
            <div className={'fl-title-bar'}>
                <p>海外现场<Link to={'/list/oversea'} className={'more-btn'}>更多<Icon type={'right'}/></Link></p>
            </div>
            <div className={'fl-box'}>
                <div className={'oversea-box'}>
                    {overseaData.data.slice(0, 2).map((item, index) => {
                        let {projectId,pic,tag, address} = item;
                        return <div key={index} className={'oversea-unit'}>
                            <Link to={{
                                pathname: '/home/Detail',
                                search: `?projectId=${projectId}`
                            }}>
                                <img src={pic}/>
                                <div className={'info-row clearfix'}>
                                    <div className={'sm-head'}><img
                                        src={pic}/>
                                    </div>
                                    <div className={'sn-info'}>
                                        <p>{tag}</p>
                                        <p>{address}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
            {/*演唱会*/}
            <div className={'fl-title-bar'}>
                <p>演唱会<Link to={'list/concert'} className={'more-btn'}>更多<Icon type={'right'}/></Link></p>
            </div>
            <div className={'fl-box change-box'}>
                <div className={'lg-unit narrate-mask'}>
                    <img
                        src={conData[0]['pic']} width={'100%'}/>
                    <div className={'narrate'}>
                        <p className={'post-li'}><span>北京 | 大家都在看</span></p>
                        <p className={'city-li'}>{conData[0]['tag']}</p>
                        <p className={'collect-li'}><i className={'iconfont icon-faxian-yanjing'}></i> 12.3万</p>
                    </div>
                </div>
                <div className={'thr-box clearfix'}>
                    {conData.slice(1, 7).map((item, index) => {
                        let {projectId, pic, name, tag} = item;
                        return <div key={index} className={'thr-unit'}>
                            <Link to={{
                                pathname: '/home/Detail',
                                search: `?projectId=${projectId}`
                            }}>
                                <img
                                    src={pic}/>
                                <p className="p-esp2">{name}</p>
                                <span className={'tag-ks'}>{tag}</span>
                            </Link>
                        </div>
                    })}
                </div>
                <a href={'javascript:;'} className={'change-btn'} onClick={this.handleChange}
                   isChange={this.state.isChange}>换一换<Icon
                    type={'reload'}/></a>
            </div>
            {/*猜你喜欢*/}
            <div className={'like-show clearfix'}>
                <p className={'like-title'}>- <span><Icon type={'heart'}/></span>猜你喜欢- </p>
                {/* UNIT*/}
                <div className={'like-box clearfix'}>
                    {LikeData.map((item, index) => {
                        let {projectId, pic, name, tag, desc} = item;
                        return <div key={index} className={'like-unit'}>
                            <Link to={{
                                pathname: '/home/Detail',
                                search: `?projectId=${projectId}`
                            }}>
                                <img src={pic}/>
                                <p className="title-p-sm">{name}</p>
                                <p><span className={'tag-ks'}>{tag}</span></p>
                                <p className={'p-esp2'}>{desc}</p>
                            </Link>
                        </div>
                    })}
                </div>
            </div>

        </div>
    }
}

export default connect(state => ({...state.home}), action.home)(IndexShow);