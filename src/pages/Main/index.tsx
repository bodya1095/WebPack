// Core
import React, { FC, useRef, useState } from 'react';

// Components
import { ErrorBoundary, Todo } from '../../components';

// Api
import { useMutations, useTodosQuery } from '../../bus/todos';

// Redux
import { useTogglersRedux } from '../../bus/client/togglers';


// Elements
import { Button, Spinner } from '../../elements';

// Styles
import { Container, Header } from './styles';

// Types

import { TodoType } from '../../bus/todos/types';

const Main: FC = () => {
    const [ text, setText ] = useState<string>('');
    const headerRef = useRef<HTMLElement>(null);
    const { togglersRedux: { isOnline }} = useTogglersRedux();

    const { todos, isLoading } = useTodosQuery();
    const { CreateTodo, DeleteTodo, UpdateTodo } = useMutations();


    if (!todos || isLoading) {
        return <Spinner />;
    }

    const onCreate = () => {
        if (text !== '') {
            CreateTodo({ body: { text }});
            setText('');
        }
    };

    return (
        <Container>
            {false && <Spinner absolute />}
            <Header ref = { headerRef }>
                <nav />
                <input
                    value = { text }
                    onChange = { (event) => void setText(event.target.value) }
                />
                <nav>
                    <Button
                        disabled = { !isOnline }
                        title = 'Create TODO'
                        onClick = { onCreate }>
                        CREATE
                    </Button>
                </nav>
            </Header>
            <main>
                {
                    todos.map((todo:TodoType, index:number) => (
                        <Todo
                            isColor = { Boolean(index % 2) }
                            key = { todo.id }
                            { ...todo }
                            deleteHandler = { () => void DeleteTodo({ todoId: todo.id }) }
                            updateHandler = { () => void UpdateTodo({
                                todoId: todo.id,
                                body:   { isCompleted: !todo.isCompleted },
                            }) }
                        />
                    ))
                }
            </main>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
