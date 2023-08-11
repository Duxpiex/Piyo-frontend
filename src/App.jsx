// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LearningRecordPage from './components/LearningRecordPage';
import RegisterPage from "./components/RegisterPage";
import DashboardPage from "./components/DashboardPage";
import { Provider } from 'react-redux';
import './App.css';
import store from './store';



function App() {
  return ( // Provider로 store를 감싸고, Router로 감싸서 라우팅을 설정
      <Provider store={store}>
      <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage/>} />
            <Route exact path="/learning-record" element={<LearningRecordPage/>} />
            <Route exact path={"/register"} element={<RegisterPage/>} />
            <Route exact path={"/dashboard"} element={<DashboardPage/>} />
          </Routes>
      </Router>
      </Provider>
  );
}

export default App;
