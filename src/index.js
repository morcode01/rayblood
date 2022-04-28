import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './template/Header';
import Footer from './template/Footer';
import Home from './screens/Home';
import Card from './screens/Card';
import './Bootstrap/bootstrap.min.css';
import './index.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
  } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route exact path="/" element={
          <div>
            <Header />
            <Home />
            <Footer />
          </div>
        } />
        <Route exact path="/rayblood" element={
          <div>
            <Header />
            <Home />
            <Footer />
          </div>
        } />
        <Route exact path="/card" element={
          <div>
            <Header />
            <Card />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
);

