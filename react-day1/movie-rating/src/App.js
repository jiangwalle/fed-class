import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import Header from "./components/Header";
import "./App.css";
import { ThemeContextProvider } from "./context/ThemeContext";
import TestPage from "./pages/TestPage";
import CounterPage from "./pages/CounterPage";
import LogoutPage from "./pages/LogoutPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";

function App() {

  // 6. 提供修改context值的回调函数，并存储在state中
  const [theme, setTheme] = useState('light');

  return (
    <div>
      {/* 2. 把想要使用context的组件放在该context的provider内部 */}
      <ThemeContextProvider value={{ theme, updateTheme: setTheme }}>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/movie-detail/:id" element={<MovieDetailPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/counter" element={<CounterPage />} />
          </Routes>
        </div>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
