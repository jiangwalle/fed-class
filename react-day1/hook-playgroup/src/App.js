import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import StepCounter from './examples/usestate/StepCounter';
import './App.css';
import Timer from './examples/useeffect/Timer';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Step Counter</Link>
        <Link to="/timer">Timer</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/" element={<StepCounter value={10} />} />
        <Route path="/timer" element={<Timer initValue={10} />} />
      </Routes>
    </div>
  );
}

export default App;
