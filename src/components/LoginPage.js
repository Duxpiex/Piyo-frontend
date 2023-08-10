import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../actions/userActions';
import store from "../store";


const backEndUrl = process.env.REACT_APP_BACKEND_URL;


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch(`${backEndUrl}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.status === 200) {
            alert(data.message);
            console.log("Full response data:", data);
            console.log("Email from response:", data.email);
            dispatch(setCurrentUser(data.email));
            console.log("Current Redux State after dispatch:", store.getState());
            navigate('/dashboard');
        } else {
            alert(data.message);
        }
    };

    const goToRegister = () => {
        navigate('/register');
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <button onClick={goToRegister}>Register</button>
        </div>


    );
};

export default LoginPage;