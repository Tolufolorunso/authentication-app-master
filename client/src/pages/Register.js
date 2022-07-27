import React from 'react';
import Wrapper from '../assets/wrappers/RegisterWrapper';
import { Logo } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <div className="register">
        <Logo />
        <h3>Join thousands of learners from around the world</h3>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
      </div>
    </Wrapper>
  );
};

export default Register;
