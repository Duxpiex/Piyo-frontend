// DashboardPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const backEndUrl = process.env.REACT_APP_BACKEND_URL;

const DashboardPage = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/')
    };

    const currentUser = useSelector((state) => state.user.currentUser);

    const handleDeleteAccount = async () => {
        try {
            console.log('Current user email:', currentUser);
            const response = await fetch(`${backEndUrl}/users/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: currentUser })  // 현재 로그인한 사용자의 이메일을 요청 본문으로 전송
            });

            if (response.status === 200) {
                const data = await response.json();
                alert(data.message);
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
