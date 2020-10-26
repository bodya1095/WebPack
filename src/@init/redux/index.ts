
// Core
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Reducers
import { togglersReducer as togglers } from '../../bus/client';
import { ReducersHub } from '../../bus/todos/reducers';

// Middlewares
import { middlewares } from './middlewares';


export const rootReducer = combineReducers({
    togglers,
    ReducersHub,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
