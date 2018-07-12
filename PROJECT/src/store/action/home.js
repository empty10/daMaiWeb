import * as TYPES from '../action-types'
import {queryBanner, queryActivityData, querySearch} from '../../api/home'

let home = {
//    banner
    queryBanner() {
        return async dispatch => {
            let bannerData = await queryBanner();
            dispatch({
                type: TYPES.HOME_BANNER,
                bannerData
            });
        }
    },
    showActivity(payload = {}) {
        let {limit = 10, page = 1, type = 1} = payload;
        return async dispatch => {
            let result = await queryActivityData({
                limit,
                page,
                type
            });
            dispatch({
                type: TYPES.HOME_ACTIVITY,
                result,
                typeActivity: type
            })
        }
    },
    showOversea(payload = {}) {
        let {limit = 10, page = 1, type = 2} = payload;
        return async dispatch => {
            let result = await queryActivityData({
                limit,
                page,
                type
            });
            dispatch({
                type: TYPES.HOME_OVERSEA,
                result,
                typeOversea: type
            })
        }
    },
    //演唱会
    showConcert(payload = {}) {
        let {limit = 10, page = 1, type = 3} = payload;
        return async dispatch => {
            let result = await queryActivityData({
                limit,
                page,
                type
            });
            dispatch({
                type: TYPES.HOME_CONCERT,
                result,
                concertType: type,
            })
        }
    },
    //猜你喜欢
    showLikeList(payload = {}) {
        let {limit = 10, page = 1, type = 9} = payload;
        return async dispatch => {
            let result = await queryActivityData({
                limit,
                page,
                type
            });
            dispatch({
                type: TYPES.HOME_LIKELIST,
                result,
                likeType: type
            })
        }
    },
};
export default home;


