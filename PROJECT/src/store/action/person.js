import * as TYPES from '../action-types';
import {queryLogin} from "../../api/register";

let person={
   queryBaseInfo(){
       return {
           type:TYPES.PERSON_ADD,
           payload:queryLogin()
       }
   }
};

export default person;




















