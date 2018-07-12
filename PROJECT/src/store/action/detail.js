import * as TYPES from '../action-types';
import {queryCollectedList,addCollection} from '../../api/product'

let detail = {
    queryCollection() {
        return async dispatch=>{
            let result=await addCollection();
            dispatch({
                type:TYPES.QUERY_COLLECTION,
                result
            })
        }
    },
    removeCollection(data) {
        return {
            type: TYPES.REMOVE_COLLECTION,
            data:data
        }
    }
};

export default detail;