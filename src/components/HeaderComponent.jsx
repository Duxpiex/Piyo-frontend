import React from "react";
import '../styles/HeaderComponent.scss';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="logo">Piyo</div>
            <Link to="/login" style={{ backgroundColor: '#FFDD67', padding: '10px 20px', color: 'white', borderRadius: '5px', fontSize:15 }}>
                로그인
            </Link>
        </header>
    );
};

export default HeaderComponent;
