import { CancelTokenSource } from "axios";
import apiRequest from '../apiRequest';
import {apis} from '../apis/apis';

const AuthServices={

     /**
   *@method login/sigin
   * @param {object} formdata
   * @returns {Promise} returns user data
   */

    login:function(formdata:Object, source: CancelTokenSource)
    {
        return apiRequest(source).post(apis.login,formdata);
    }
};

export default AuthServices;