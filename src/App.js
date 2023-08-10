// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LearningRecordPage from './components/LearningRecordPage';
import RegisterPage from "./components/RegisterPage";
import DashboardPage from "./components/DashboardPage";
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
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
