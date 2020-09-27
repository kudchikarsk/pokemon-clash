import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Laboratory, Login, Training } from "./pages"

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/laboratory" component={Laboratory} />
        <Route path="/training" component={Training} />
      </Router>
    </div>

  );
}

export default App;
