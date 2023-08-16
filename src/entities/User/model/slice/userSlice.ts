import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User/model/type/user';

const initialState: UserSchema = {
    authData: {
        id: '123',
        username: 'das',
    },
};

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
