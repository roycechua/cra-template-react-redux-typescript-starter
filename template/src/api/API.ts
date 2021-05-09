import { makeRequest } from './axiosModule';
import { API_METHODS } from '../common/enums';

const login = (payload : any, config ?: any) => 
    makeRequest(API_METHODS.POST, '/login', payload, config);




export {
    login,
}