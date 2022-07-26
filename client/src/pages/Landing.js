import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../assets/images/architect.jpg';
import Wrapper from '../assets/wrappers/Landing';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav class="nav">
        <div class="nav-wrapper">
          <Link to="/" class="nav-logo">
            <Logo />
          </Link>
          <div class="links">
            <Link to="/">Home</Link>
            <Link to="/users/register">Register</Link>
            <Link to="/users/login">Login</Link>
          </div>
        </div>
      </nav>
      <header class="header">
        <img src={bg} alt="" class="header-bg" />
        <div class="header-content">
          <h1 class="header-content__title">
            <span>Dc</span>
            Devchallenges
          </h1>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </Wrapper>
  );
};

export default Landing;
