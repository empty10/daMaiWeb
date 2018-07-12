import * as TYPES from '../action-types';

let INIT_STATE = {
    bannerData: [],
    navList: [
        {index: 1, type: 3, tagName: '演唱会'},
        {index: 2, type: 4, tagName: '话剧歌剧'},
        {index: 3, type: 8, tagName: '音乐会'},
        {index: 4, type: 5, tagName: '体育'},
        {index: 5, type: 2, tagName: '曲苑杂坛'},
        {index: 6, type: 7, tagName: '亲子'},
        {index: 7, type: 6, tagName: '展览休闲'},
        {index: 8, type: 1, tagName: '电影'}
    ],
    activityData: {
        limit: 10,
        page: 1,
        data: []
    },
    overseaData: {
        limit: 10,
        page: 1,
        data: []
    },
    concertData: {
        total: 1,
        limit: 10,
        page: 1,
        data: []
    },
    likeListData: {
        total: 1,
        limit: 10,
        page: 1,
        data: []
    }
    // concertType: 'change'
};
export default function home(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.HOME_BANNER:
            let {code, data} = action.bannerData;
            if (parseFloat(code) === 0) {
                state.bannerData = data;
            }
            break;
        case TYPES.HOME_ACTIVITY:
            let {result} = action;
            if (parseFloat(result.code) === 0) {
                state.activityData.limit = parseFloat(result.limit);
                state.activityData.page = parseFloat(result.page);
                state.activityData.data = state.activityData.data.concat(result.data);
            }
            break;
        case TYPES.HOME_OVERSEA:
            let {result: resultOversea} = action;
            if (parseFloat(resultOversea.code) === 0) {
                state.overseaData.limit = parseFloat(resultOversea.limit);
                state.overseaData.page = parseFloat(resultOversea.page);
                state.overseaData.data = state.overseaData.data.concat(resultOversea.data);
            }
            break;
        case TYPES.HOME_CONCERT:
            state.concertData.data = [];
            let {result: resultConcert} = action;
            if (parseFloat(resultConcert.code) === 0) {
                state.concertData.limit = parseFloat(resultConcert.limit);
                state.concertData.page = parseFloat(resultConcert.page);
                state.concertData.total = parseFloat(resultConcert.total);
                state.concertData.data = resultConcert.data;
            }
            break;
        case TYPES.HOME_LIKELIST:
            let {result: resultLikeList} = action;
            if (resultLikeList.code === 0) {
                state.likeListData.limit = parseFloat(resultLikeList.limit);
                state.likeListData.page = parseFloat(resultLikeList.page);
                state.likeListData.total = parseFloat(resultLikeList.total);
                state.likeListData.data = state.likeListData.data.concat(resultLikeList.data);
            }
            break;
    }
    return state;
}


