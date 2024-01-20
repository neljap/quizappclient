import { createSlice } from "@reduxjs/toolkit";

// const initqueue = [{
//         id: 1,
//         question : "Javascript is an _______ language",
//         options : [
//             'Object-Oriented',
//             'Object-Based',
//             'Procedural',
//         ]
//     },
//     {
//         id: 2,
//         question : "Following methods can be used to display data in some form using Javascript",
//         options : [
//             'document.write()',
//             'console.log()',
//             'window.alert()',
//         ]
//     },
//     {
//         id: 3,
//         question : "When an operator value is NULL, the typeof returned by the unary operator is:",
//         options : [
//             'Boolean',
//             'Undefined',
//             'Object',
//         ]
//     },
//     {
//         id: 4,
//         question : "What does the toString() method return?",
//         options : [
//             'Return Object',
//             'Return String',
//             'Return Integer'
//         ]
//     },
//     {
//         id: 5,
//         question : "Which function is used to serialize an object into a JSON string?",
//         options : [
//             'stringify()',
//             'parse()',
//             'convert()',
//         ]
//     }]

/** create reducer */
export const questionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [],
        answers : [],
        trace : 0
    },
    reducers : {
        startExamAction : (state, action) => {
            let { question, answers} = action.payload
            return {
                ...state,
                queue : question,
                answers
            }
        },
        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllAction : () => {
            return {
                queue: [],
                answers : [],
                trace : 0
            }
        }
    }
})

export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } = questionReducer.actions;

export default questionReducer.reducer;