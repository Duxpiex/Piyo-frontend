export const SET_CURRENT_USER = 'SET_CURRENT_USER'; // 액션 타입 정의

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER, // 액션 타입 ( 루트 리듀서에서 하위 리듀서로 액션을 전부 보내는데 이때 액션 타입과 일치하면 해당 리듀서에서 액션을 처리함 )
    payload: user
});
