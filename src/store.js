import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';


const rootReducer = combineReducers({ // 여러 리듀서를 하나로 합침 rootReducer가 모든 액션을 받아서 하위 리듀서로 나눠줌
    user: userReducer
});

const store = configureStore({
    reducer: rootReducer // 스토어의 리듀서로 하나로 합친 rootReducer를 사용한다는 뜻
});

export default store;
