import { SET_CURRENT_USER } from '../actions/userActions';

const initialState = {
    currentUser: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: // 액션 타입이 SET_CURRENT_USER일 때 즉 이 리듀서가 이 액션타입을 처리할 수 있음
            return {
                ...state, // 기존 상태를 그대로 가져오고
                currentUser: action.payload // currentUser를 action.payload로 업데이트 ( user는 백엔드에서 받은 이메일, 즉 로그인한 유저의 이메일을 상태에 적용 )
            };
        default:
            return state;
    }
};

export default userReducer;
