// RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const backEndUrl = process.env.REACT_APP_BACKEND_URL; // .env 파일에 저장한 백엔드 서버 URL

const RegisterPage = () => {
    // 상태관리
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault(); // 기본 동작 방지 (새로고침 방지)

        const response = await fetch(`${backEndUrl}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }) // 입력한 이메일과 비밀번호를 요청 본문으로 전송
        });

        if(response.status === 201){ // 회원가입 성공
            const data = await response.json();
            navigate('/login'); // 로그인 페이지로 이동
            alert(data.message);
        }else if (response.status === 400){ // 이메일 중복
            alert('Email already exists');
        }else{
            alert('Something went wrong');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>

            </form>
        </div>
    );
};

export default RegisterPage;
