import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value:0
    },
    reducers:{
        incrementa: (state) => {
            state.value += 1;
        },
        decrementa: (state) => {
            state.value -= 1;
        }
    }
})

export const {incrementa, decrementa} = counterSlice.actions
export const selectCount = state => state.counter.value
export default counterSlice.reducer