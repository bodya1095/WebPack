// Middlewares
import { Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const isDev = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [ sagaMiddleware ];

isDev && middlewares.push(
    createLogger({
        duration:  true,
        collapsed: true,
        colors:    {
            title:     () => '#139BFE',
            prevState: () => '#1C5FAF',
            action:    () => '#149945',
            nextState: () => '#A47104',
            error:     () => '#ff0005',
        },
    }),
);

export { middlewares, sagaMiddleware };
