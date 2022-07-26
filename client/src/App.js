import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Landing,
  Register,
  Login,
  Profile,
  ProfileEdit,
  NotFound,
} from './pages';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
