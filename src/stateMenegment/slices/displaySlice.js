import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
    name: 'display',
    initialState: {
        value: '0',
        number: '0',
        numbers: [],
        operator: [],
        phase:0,
        finish: false,
    },
    reducers: {
        add: (state, action) => {
            if(state.value==='0' || state.finish === true){
                state.number = ''
                state.value  = ''
                state.finish = false
                state.phase = 0
                state.numbers = []
                state.operator = []
            }
            state.number += action.payload
            state.value  += action.payload
        },
        piu: (state) => {
            state.numbers.push(parseInt(state.number))
            state.number = ''
            state.value += ' + '
            state.phase += 1
            state.operator.push(1)
            
        },
        meno: (state) => {
            state.numbers.push(parseInt(state.number))
            state.number = ''
            state.value += ' - '
            state.phase += 1
            state.operator.push(2)
            
        },
        per: (state) => {
            state.numbers.push(parseInt(state.number))
            state.number = ''
            state.value += ' x '
            state.phase += 1
            state.operator.push(3)
            
        },
        diviso: (state) => {
            state.numbers.push(parseInt(state.number))
            state.number = ''
            state.value += ' ÷ '
            state.phase += 1
            state.operator.push(4)
            
        },
        cancel: (state) => {
            state.value = '0'
            state.number =  ''
            state.numbers =  []
            state.operator = []
            state.operator = 0
            state.phase = 0
        },
        equal: (state) => {
            state.numbers[state.phase] = parseInt(state.number)
            state.value += ' = ';
            for(var i=0;i<state.phase;i++){
                switch(state.operator[i]){
                    case 1:
                        state.numbers[i+1] = state.numbers[i] + state.numbers[i+1]
                        break
                    case 2:
                        state.numbers[i+1] = state.numbers[i] - state.numbers[i+1]
                        break
                    case 3:
                        state.numbers[i+1] = state.numbers[i] * state.numbers[i+1]
                        break
                    case 4:
                        state.numbers[i+1] = state.numbers[i] / state.numbers[i+1]
                        break
                    default:
                        window.alert('sei un coglione, anzi no, un grandissimo coglione')
                }
            }
            console.log(state.numbers[state.phase])
            state.value += state.numbers[state.phase]
            state.finish = true   
        }

    }
})

export const { add, piu, meno, per, diviso, cancel, equal } = displaySlice.actions
export const displayZero = (state) => state.display.value
export default displaySlice.reducer
