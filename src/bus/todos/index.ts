
// Api
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api';

// Types
import { CreateTodoInput, UpdateTodoInput, DeleteTodoInput } from './types';
import { initialStateType } from '../../bus/todos/reducers';
// Hooks
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export const useTodosQuery = () => {
    const { todos, isLoading } = useSelector(
        (state: initialStateType) => state,
    );
    useEffect(() => {
        fetchTodos();
    }, []);

    return { todos, isLoading };
};

export const useMutations = () => {
    const CreateTodo = (input: CreateTodoInput) => {
        createTodo(input);
    };

    const UpdateTodo = (input: UpdateTodoInput) => {
        updateTodo(input);
    };
    const DeleteTodo = (input: DeleteTodoInput) => {
        deleteTodo(input);
    };

    return {
        CreateTodo,
        UpdateTodo,
        DeleteTodo,
    };
};

