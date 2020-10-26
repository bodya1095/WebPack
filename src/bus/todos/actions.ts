
import {
    Todos,
    CreateTodoInput,

} from './types';


export const CREATE_TODO_ACTION = 'CREATE_TODO_ACTION';
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION';
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';
export const SET_TODO_ACTION = 'SET_TODO_ACTION';
export const IS_LOADING_ACTION = 'IS_LOADING_ACTION';

// Action types

export type CreateTodoActionType = {
    type: typeof CREATE_TODO_ACTION;
    payload: CreateTodoInput;
};
export type UpdateTodoActionType = {
    type: typeof UPDATE_TODO_ACTION;
    payload: string;
};
export type DeleteTodoActionType = {
    type: typeof DELETE_TODO_ACTION;
    payload: string;
};

export type SetTodoActionType = {
    type: typeof SET_TODO_ACTION;
    payload:Todos

}

export type IsLoadingActionType = {
    type: typeof IS_LOADING_ACTION;
    payload: boolean
}

// Action Creators
export  const IsLoadingTodoActionCreator = (isLoading:boolean):IsLoadingActionType => {
    return {
        type:    IS_LOADING_ACTION,
        payload: isLoading,
    };
};

export    const DeleteTodoActionCreator = (payload:string): DeleteTodoActionType => {
    return {
        type:    DELETE_TODO_ACTION,
        payload: payload,
    };
};

export   const CreateTodoActionCreator = (input:CreateTodoInput): CreateTodoActionType => {
    return {
        type:    CREATE_TODO_ACTION,
        payload: input,
    };
};


export   const UpdateTodoActionCreator = (
    payload: string,
): UpdateTodoActionType => {
    return {
        type:    UPDATE_TODO_ACTION,
        payload: payload,
    };
};

export   const SetTodoActionCreator = (payload: Todos):SetTodoActionType => {
    return {
        type:    SET_TODO_ACTION,
        payload: payload,
    };
};

