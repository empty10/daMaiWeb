import * as TYPES from '../action-types';

let INIT_STATE = {
    data: null,
    cart:{
        collected:[],
        unCollected:[]
    }
};
export default function detail(state = INIT_STATE, action){
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.QUERY_PRODUCT_INFO:

        case TYPES.QUERY_COLLECTION:
            //从服务器获取state
            if(parseFloat(action.result.code)===0){
                state.cart.collected=action.result.data;
            }
            break;
        case TYPES.ADD_COLLECTION:
            state={...state,cart:state.cart.collected.push(action.data)};
            break;
        case TYPES.REMOVE_COLLECTION:
            state={...state,cart:state.cart.unCollected.remove(action.data)}
    }
    return state;
};