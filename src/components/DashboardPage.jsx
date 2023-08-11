// DashboardPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const backEndUrl = process.env.REACT_APP_BACKEND_URL // .env 파일에 저장한 백엔드 서버 URL

const DashboardPage = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/') // 로그인 페이지로 이동 ( 로그아웃은 그냥 세션을 삭제하는 것이므로 서버에 요청을 보낼 필요가 없다. )
    };

    const currentUser = useSelector((state) => state.user.currentUser); // 현재 로그인한 사용자의 이메일을 가져옴 (Redux 상태에서 가져옴)

    const handleDeleteAccount = async () => {
        try {
            const response = await fetch(`${backEndUrl}/users/delete`, {
                method: 'DELETE', // DELETE 메소드로 요청
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: currentUser })  // 현재 로그인한 사용자의 이메일을 요청 본문으로 전송
            });

            if (response.status === 200) {
                const data = await response.json();
                alert(data.message); // 회원 탈퇴 성공 메세지
                handleLogout();  // 회원 탈퇴 후 로그아웃 처리
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            alert('Error deleting account:', error.message);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
        </div>
    );
};

export default DashboardPage;
