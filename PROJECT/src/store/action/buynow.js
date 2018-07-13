import * as TYPES from '../action-types';
import {queryCollectedList,addCollection} from '../../api/product'

let buyNow = {
    queryCollection() {
        return async dispatch=>{
            let result=await addCollection();
            dispatch({
                type:TYPES.QUERY_COLLECTION,
                result
            })
        }
    },
    queryPrice(){
        return dispatch=>{
            dispatch({
                type:TYPES.QUERY_PRICE
            })
        }
    }

};

export default buyNow;