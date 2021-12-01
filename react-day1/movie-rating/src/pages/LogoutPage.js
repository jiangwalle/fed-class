import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('doumiao-token');
    navigate('/login');
  }, []);

  return (
    <div />
  )
}

export default LogoutPage;