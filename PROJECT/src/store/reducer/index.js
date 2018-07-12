import {combineReducers} from 'redux';
import detail from './detail';
import  buyNow from './buynow';

import home from './home';

let reducer = combineReducers({
    detail,
    buyNow,
    home
});
export default reducer;