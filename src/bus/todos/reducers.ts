import { Reducer } from 'react';


// Actions
import { CREATE_TODO_ACTION, UPDATE_TODO_ACTION, DELETE_TODO_ACTION, SET_TODO_ACTION,  IS_LOADING_ACTION } from './actions';

// Types
import { Todos, TodoType } from '../todos/types';


type actionTypeWithPayload ={
    type: string,
    payload: Todos | boolean | string
}


export type initialStateType = {
    isLoading: boolean,
    todos: Todos;
}
const initialState:initialStateType =  {
    isLoading: false,
    todos:     [],
};

const isBoolean = (payload:boolean|string|Todos):payload is boolean  => {
    if (typeof payload === 'boolean') {
        return true;
    }

    return false;
};


export const ReducersHub:Reducer<initialStateType, actionTypeWithPayload>
 = (state = initialState, action): initialStateType => {
     switch (action.type) {
         case SET_TODO_ACTION: {
             const tempState = Object.assign({}, state, action.payload);

             return tempState;
         }

         case CREATE_TODO_ACTION: {
             const tempState = Object.assign({}, state, action.payload);

             return tempState;
         }

         case UPDATE_TODO_ACTION: {
             const tempState = Object.assign({}, state);
             tempState.todos.map((todo:TodoType) => {
                 if (todo.id === action.payload) {
                     todo.isCompleted = !todo.isCompleted;
                 }


                 return todo;
             });


             return state;
         }


         case DELETE_TODO_ACTION: {
             const  tempState = Object.assign({}, state);
             tempState.todos.filter((todo: TodoType) => todo.id !== action.payload);

             return tempState;
         }

         case IS_LOADING_ACTION: {
             if (isBoolean(action.payload)) {
                 const tempState = Object.assign({}, state);
                 tempState.isLoading = action.payload;

                 return tempState;
             }

             return state;
         }
         default: { return state; }
     }
 };
