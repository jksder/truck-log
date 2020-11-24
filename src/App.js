import React, { useState } from "react";

//import navigation
import { Route, BrowserRouter as Router } from 'react-router-dom';

//header+footer
import Header from './components/Header';
import Footer from './components/Footer';

//import pages
import Entry from './pages/Entry';
import EntryLog from './pages/EntryLog';

//import styles
import './App.css';

export default function App() {

  return (
    <Router>
      <div className="layout">
        <Header />
        <Route exact path="/entry" render={() => <Entry />} />
        <Route exact path="/entry-log" render={() => <EntryLog />} />
        <Footer />
      </div>
    </Router>
  );
}
