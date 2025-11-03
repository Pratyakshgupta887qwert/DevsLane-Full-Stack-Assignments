import { createStore, type Action } from "@reduxjs/toolkit";
export type State = {
    happyCount: number;
    sadCount: number;
};

const initialState: State = {
    happyCount: 0,
    sadCount: 0
};

function reducer(currentState: State = initialState, action: Action): State {
    if (action.type === 'HAPPY_COUNT_INCREMENT') {
        return {
            ...currentState,
            happyCount: currentState.happyCount + 1
        }
    }
    if (action.type === 'SAD_COUNT_INCREMENT') {
        return {
            ...currentState,
            sadCount: currentState.sadCount + 1
        }
    }
    return currentState;
}

const store = createStore(reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;