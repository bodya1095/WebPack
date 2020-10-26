// Store
import { store } from '../../@init';

// Types
import { FetchTodos, CreateTodoType, UpdateTodo, DeleteTodo } from './types';

// Constants
import { API_URL } from '../../@init/constants';

// Instruments
const todosUrl = `${API_URL}/todos`;

// Redux

// Actions
import { DeleteTodoActionCreator, UpdateTodoActionCreator, SetTodoActionCreator, IsLoadingTodoActionCreator } from './actions';


export const fetchTodos: FetchTodos = async () => {
    store.dispatch(IsLoadingTodoActionCreator(true));
    try {
        const response = await fetch(todosUrl, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('Todos fetch failed');
        }

        const responseData =  await response.json();
        store.dispatch(SetTodoActionCreator(responseData));
    } catch (error)     {
        console.log(error);
    }     finally {
        store.dispatch(IsLoadingTodoActionCreator(false));
    }
};

export const createTodo: CreateTodoType = async ({ body }) => {
    store.dispatch(IsLoadingTodoActionCreator(true));
    try {
        const response = await fetch(todosUrl, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body:        JSON.stringify(body),
        });

        if (response.status !== 201) {
            throw new Error('Todo create failed');
        }

        const data = await response.json();
        store.dispatch(SetTodoActionCreator(data));
    }     catch (error)     { console.log(error); } finally {
        store.dispatch(IsLoadingTodoActionCreator(false));
    }
};

export const updateTodo: UpdateTodo = async ({ todoId, body }) => {
    store.dispatch(IsLoadingTodoActionCreator(true));
    try {
        const response = await fetch(`${todosUrl}/${todoId}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body:        JSON.stringify(body),
        });

        if (response.status !== 200) {
            throw new Error('Todo update failed');
        }


        store.dispatch(UpdateTodoActionCreator(todoId));
    } catch (error) { console.log(error); } finally {
        store.dispatch(IsLoadingTodoActionCreator(false));
    }
};

export const deleteTodo: DeleteTodo = async ({ todoId }) => {
    store.dispatch(IsLoadingTodoActionCreator(true));
    try {
        const response = await fetch(`${todosUrl}/${todoId}`, {
            method:  'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (response.status !== 200) {
            throw new Error('Todo delete failed');
        }


        store.dispatch(DeleteTodoActionCreator(todoId));
    }     catch (error)     {
        console.log(error);
    }     finally {
        store.dispatch(IsLoadingTodoActionCreator(false));
    }
};
