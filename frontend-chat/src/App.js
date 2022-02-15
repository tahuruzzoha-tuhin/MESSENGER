import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Message from './message/Message';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="/login" element={< Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/messenger" element={<Message />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
