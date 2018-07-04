import React from 'react';
import {connect} from 'react-redux'
import NavFixed from "../component/NavFixed";
import SearchBar from '../component/SearchBar'
import Banner from '../component/Banner'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
//less
import '../static/less/home.less'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={'con-axis fixTop fixBottom'}>
            <SearchBar/>
            <NavFixed/>
            <Banner/>
            <div className={'category-box clearfix'}>
                <Link to={'/'} className={'categ-unit'}><i className={'navIcon01'}></i><span>演唱会</span></Link>
                <Link to={'/'} className={'categ-unit'}><i className={'navIcon02'}></i><span>演唱会</span></Link>
                <Link to={'/'} className={'categ-unit'}><i className={'navIcon03'}></i><span>演唱会</span></Link>
                <Link to={'/'} className={'categ-unit'}><i className={'navIcon04'}></i><span>演唱会</span></Link>
                <Link to={'/'} className={'categ-unit'}><i className={'navIcon05'}></i><span>演唱会</span></Link>
                <Link to={'/'} className={'categ-unit'}><i className={'navIcon06'}></i><span>演唱会</span></Link>
                <Link to={'/'} className={'categ-unit'}><i className={'navIcon07'}></i><span>演唱会</span></Link>
                <Link to={'/'} className={'categ-unit'}><i className={'navIcon08'}></i><span>演唱会</span></Link>
            </div>

            <div className={'ban-adv'}
                 style={{backgroundImage: 'url("https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg")'}}></div>
            <div className={'hot-act-box'}>
                <div className={'hot-act-row'}>
                    <div className={'dbl-unit narrate-mask'}><img
                        src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <div className={'narrate'}>
                            <p className={'post-li'}><span>北京|大家都在看</span></p>
                            <p className={'city-li'}>芝加哥</p>
                            <p className={'collect-li'}><i className={'iconfont icon-faxian-yanjing'}></i> 12.3万</p>
                        </div>
                    </div>
                    <div className='unit-oth'><img
                        src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                    </div>
                </div>
                <div className={'hot-act-row'}>
                    <div className={'unit'}><img
                        src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p>爵士音乐中心</p></div>
                    <div className='unit'><img
                        src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p>国家大剧院</p></div>
                    <div className='unit'><img
                        src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p>捕鼠器</p></div>
                </div>
            </div>
            {/*海外现场*/}
            <div className={'fl-title-bar'}>
                <p>海外现场<Link to={''} className={'more-btn'}>更多<Icon type={'right'}/></Link></p>
            </div>
            <div className={'fl-box'}>
                <div className={'oversea-box'}>
                    <div className={'oversea-unit'}>
                        <img
                            src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <div className={'info-row clearfix'}>
                            <div className={'sm-head'}><img
                                src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                            </div>
                            <div className={'sn-info'}>
                                <p>查理普斯</p>
                                <p>断眉小哥香港开唱</p>
                            </div>
                        </div>
                    </div>
                    <div className={'oversea-unit'}>
                        <img
                            src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <div className={'info-row clearfix'}>
                            <div className={'sm-head'}><img
                                src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                            </div>
                            <div className={'sn-info'}>
                                <p>查理普斯</p>
                                <p>断眉小哥香港开唱</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*演唱会*/}
            <div className={'fl-title-bar'}>
                <p>演唱会<Link to={''} className={'more-btn'}>更多<Icon type={'right'}/></Link></p>
            </div>
            <div className={'fl-box change-box'}>
                <div className={'lg-unit narrate-mask'}>
                    <img
                        src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                    <div className={'narrate'}>
                        <p className={'post-li'}><span>北京 | 大家都在看</span></p>
                        <p className={'city-li'}>陈慧娴</p>
                        <p className={'collect-li'}><i className={'iconfont icon-faxian-yanjing'}></i> 12.3万</p>
                    </div>
                </div>
                <div className={' thr-box clearfix'}>
                    <div className={'thr-unit'}>
                        <img
                            src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p className="p-esp2">你的世界里，可能只欠一把大火，可以让你的荒野熊熊燃烧。</p>
                        <span className={'tag-ks'}>中国巡演</span>
                    </div>
                    <div className={'thr-unit'}>
                        <img
                            src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p className={'p-esp2'}>你的世界里，可能只欠一把大火，TOTALFAT可以让你的荒野熊熊燃烧。</p>
                        <span className={'tag-ks'}>中国巡演</span>
                    </div>
                    <div className={'thr-unit'}>
                        <img
                            src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p className={'p-esp2'}>你的世界里，可能只欠一把大火，TOTALFAT可以让你的荒野熊熊燃烧。</p>
                        <span className={'tag-ks'}>中国巡演</span>
                    </div>
                    <div className={'thr-unit'}>
                        <img
                            src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p className={'p-esp2'}>你的世界里，可能只欠一把大火，TOTALFAT可以让你的荒野熊熊燃烧。</p>
                        <span className={'tag-ks'}>中国巡演</span>
                    </div>
                    <div className={'thr-unit'}>
                        <img
                            src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p className={'p-esp2'}>你的世界里，可能只欠一把大火，TOTALFAT可以让你的荒野熊熊燃烧。</p>
                        <span className={'tag-ks'}>中国巡演</span>
                    </div>
                    <div className={'thr-unit'}>
                        <img
                            src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p className={'p-esp2'}>你的世界里，可能只欠一把大火，TOTALFAT可以让你的荒野熊熊燃烧。</p>
                        <span className={'tag-ks'}>中国巡演</span>
                    </div>
                </div>
                <span className={'change-btn'}>换一换<Icon type={'reload'}/></span>
            </div>
            {/*猜你喜欢*/}
            <div className={'like-show clearfix'}>
                <p className={'like-title'}>- <span><Icon type={'heart'}/></span>猜你喜欢- </p>
                {/* UNIT*/}
                <div className={'like-box clearfix'}>
                    <div className={'like-unit'}>
                        <img
                            src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p className="title-p-sm">你的世界里，可能只欠一把大火，可以让你的荒野熊熊燃烧。</p>
                        <p><span className={'tag-ks'}>中国巡演</span></p>
                        <p className={'p-esp2'}>你的世界里，可能只欠一把大火，可以让你的荒野熊熊燃烧。</p>
                    </div>
                    <div className={'like-unit'}>
                        <img
                            src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p className="title-p-sm">你的世界里，可能只欠一把大火，可以让你的荒野熊熊燃烧。</p>
                        <p><span className={'tag-ks'}>中国巡演</span></p>
                        <p className={'p-esp2'}>你的世界里，可能只欠一把大火，可以让你的荒野熊熊燃烧。</p>
                    </div>
                    <div className={'like-unit'}>
                        <img
                            src={'https://damaipimg.oss-cn-beijing.aliyuncs.com/cfs/src/4797d912-611e-4244-ac5f-81df9295d7ae.jpg'}/>
                        <p className="title-p-sm">你的世界里，可能只欠一把大火，可以让你的荒野熊熊燃烧。</p>
                        <p><span className={'tag-ks'}>中国巡演</span></p>
                        <p className={'p-esp2'}>你的世界里，可能只欠一把大火，可以让你的荒野熊熊燃烧。</p>
                    </div>

                </div>
            </div>

        </div>
    }
}

export default connect()(Home);