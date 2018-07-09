import {combineReducers} from 'redux';
import detail from './detail';
import  buyNow from './buynow';


let reducer = combineReducers({
    detail,
    buyNow
});
export default reducer;