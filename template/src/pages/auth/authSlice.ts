import { createSlice } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../redux/store';
import { AuthInputs } from './types';
import { API } from '../../api';
import Swal from "sweetalert2";
import { History } from 'history';

export interface AuthState {
    status: 'loading' | 'success' | 'failed';
}

const initialState = {
    authenticated: false,
    message: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthSuccess: (state) => {
            state.authenticated = true;

        },
        setAuthFail: (state) => {
            state.authenticated = false;
        },
        resetAuth: (state) => initialState
    }
});

export const {
    setAuthSuccess,
    setAuthFail,
    resetAuth
} = authSlice.actions

export const selectAuthState = (state: RootState) => state.auth;

export const login = (data : AuthInputs, history : History): AppThunk => async (
    dispatch,
    getState
  ) => {
    try {
        // TODO: uncomment apiResponse when a backend is deployed
        // const apiResponse = await API.login(data, {});
        // if (apiResponse?.status === 200) {
        if(true) {
            // dispatch(setUser(apiResponse.data.data))
            Swal.fire({
                title: "Login",
                text: "Login Successful",
                icon: "success",
                confirmButtonText: "OK",
            }).then((res) => {
                if(res.isConfirmed) {
                    dispatch(setAuthSuccess());
                    window.localStorage.setItem('AUTH_TOKEN', 'sample');
                    history.replace('/dashboard');
                }
            });
        } else {
            dispatch(setAuthFail());
            Swal.fire({
                title: "Login",
                text: "Login Failed. Check your credentials.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    } catch(error) {
        Swal.fire({
            title: "Login",
            text: `Login Failed. Error encountered '${error.message}'`,
            icon: "error",
            confirmButtonText: "OK",
        });
    }
};
  
export default authSlice.reducer