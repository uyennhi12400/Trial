import React from 'react';
import ReactDOM from 'react-dom/client';
import Ex1 from './Components/Ex1/Ex1';
import Ex2 from './Components/Ex2/Ex2';
import Ex3 from './Components/Ex3/Ex3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ex1 />
    <Ex2 />
    <Ex3 /> 
  </React.StrictMode>
);

