import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './template/Header';
import Footer from './template/Footer';
import Home from './screens/Home';
import './Bootstrap/bootstrap.min.css';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);

