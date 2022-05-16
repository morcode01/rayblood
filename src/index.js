import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './template/Header';
import Footer from './template/Footer';
import Home from './screens/Home';
import Card from './screens/Card';
import Question from './screens/Question';
import Login from './screens/Login';
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
        <Route exact path="/question" element={
          <div>
            <Header />
            <Question />
            <Footer />
          </div>
        } />
        <Route exact path="/login" element={
          <div>
            <Header />
            <Login />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
);

