import React from 'react';
import ReactDOM from 'react-dom';
import './components/components-styles/index.scss';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route path={['/:videoid', '/upload', '/']} render={(routerProps) => <App {...routerProps} /> }/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

