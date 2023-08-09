// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LearningRecordPage from './components/LearningRecordPage';

function App() {
  return (
      <Router>
          <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          <Route exact path="/learning-record" element={<LearningRecordPage/>} />
          </Routes>
      </Router>
  );
}

export default App;
