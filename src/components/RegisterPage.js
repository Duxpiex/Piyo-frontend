// RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const backEndUrl = process.env.REACT_APP_BACKEND_URL;

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await fetch(`${backEndUrl}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if(response.status === 201){
            const data = await response.json();
            navigate('/');
            alert(data.message);
        }else if (response.status === 400){
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
