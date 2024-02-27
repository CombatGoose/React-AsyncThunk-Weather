import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeather } from '../../api/weather';

const initialState = {
    isLoading: false,
    isError: false,
    isSuccesful: false,
    location: {},
    current: {}
}

export const setWeather = createAsyncThunk(
    'weather/get',
    async (city) => {
        const data = getWeather(city);
        return data;
    }
);

const weatherSlice = createSlice(
    {
        name: 'Weather',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(setWeather.pending, state => {
                    state.isSuccesful = false;
                    state.isLoading = true;
                })
                .addCase(setWeather.fulfilled, (state, action) => {
                    state.location = { ...action.payload.location };
                    state.current = { ...action.payload.current };
                    state.isSuccesful = true;
                    state.isError = false;
                    state.isLoading = false;
                })
                .addCase(setWeather.rejected, state => {
                    state.isSuccesful = false;
                    state.isLoading = false;
                    state.isError = true;
                })
        }
    }
);

export default weatherSlice.reducer;