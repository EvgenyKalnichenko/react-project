import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData, Profile, ProfileSchema } from 'entities/Profile';

const initialState: ProfileSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = profileSlice;
export const { reducer: userReducer } = profileSlice;
