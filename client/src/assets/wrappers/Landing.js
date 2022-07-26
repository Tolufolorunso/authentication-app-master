import styled from 'styled-components';

const Wrapper = styled.div`
  body {
    font-family: Verdana, sans-serif;
    line-height: 1.5;
    font-size: 1.5rem;
    color: #000;
    font-weight: 400;
  }

  h1 {
    font-size: 3.6rem !important;
  }

  h3 {
    font-size: 2.4rem !important;
  }

  p {
    font-size: 1.5rem !important;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .nav {
    background-color: #fff;
    padding: 0.8rem 0;
    box-shadow: 0 0 20px -6px rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    z-index: 2;
  }

  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
  }

  .nav-logo,
  .links a {
    letter-spacing: 4px;
    display: inline-block;
    padding: 0.8rem 1.6rem;
    transition: all 0.3s ease;
  }

  .nav-logo {
    /* display: inline-block;
  padding: 0.8rem 1.6rem;
  transition: all 0.3s ease; */
  }

  .links a {
    text-transform: capitalize;
  }

  .links a:hover,
  .nav-logo:hover {
    background-color: #ccc;
  }

  .header {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    position: relative;
  }

  .header-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .header-content__title {
    letter-spacing: 4px;
    font-weight: 300;
    color: #fff;
  }

  .header-content__title span {
    background-color: rgba(0, 0, 0, 0.7);
    font-weight: 600;
    padding: 1rem;
  }
`;

export default Wrapper;
