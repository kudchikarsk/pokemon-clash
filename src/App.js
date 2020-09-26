import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Laboratory, Login } from "./pages"

function App() {
  return (
    <div className="container-fluid mt-2">
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/laboratory" component={Laboratory} />
      </Router>
    </div>

  );
}

export default App;
