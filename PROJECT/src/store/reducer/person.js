import * as TYPES from '../action-types';
let INIT_DATA={
    baseUserName:null,

};

export default function register(state=INIT_DATA,action) {
    state = JSON.parse(JSON.stringify(state));
     let payload = {};
    switch (action.type){
        case TYPES.PERSON_ADD:
            payload = action.payload;
            parseFloat(payload.code) === 0 ? state.baseUserName = payload.userName : null;
            break;
    }

    return state;

}