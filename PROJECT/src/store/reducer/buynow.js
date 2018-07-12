import * as TYPES from '../action-types';

let INIT_STATE = {
    isSelected:false
};
export default function buyNow(state = INIT_STATE, action){
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.QUERY_PRODUCT_INFO:

        case TYPES.QUERY_COLLECTION:
            //从服务器获取state
            if(parseFloat(action.result.code)===0){
                state.cart.collected=action.result.data;
            }
            break;
        case TYPES.QUERY_PRICE:
            let price=this.state.detail.data.price;
            break;
    }
    return state;
};