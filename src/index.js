import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import bgImg from './assets/Background.png';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-width: none;
    font-family: 'Lalezar', serif;
  }

  body {
    background-image: url(${bgImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    width: 100vw;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);