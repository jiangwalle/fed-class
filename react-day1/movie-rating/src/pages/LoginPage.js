import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn } from '../utils/anthentication';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const userNameRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();

  const handleLogin = async () => {
    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    
    try {
      const res = await axios.post('http://localhost:5000/login', {
        username,
        password
      });

      console.log(`Login succeed: `, res);
      const { token, id } = res.data;
      localStorage.setItem('doumiao-token', token);
      localStorage.setItem('doumiao-user-id', id);

      // 登录成功，跳转到首页
      navigate('/');
    } catch (e) {
      setErrorMessage(e.response.data.error)
    }
  }

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/');
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2>登录</h2>

      <p className={styles.error}>{errorMessage}</p>

      {/** 第2步： 指定ref */}
      <input ref={userNameRef} name="username" placeholder="请输入用户名"></input>
      <input ref={passwordRef} name="password" type="password" placeholder="请输入密码"></input>
      <Link to="/signup">还没有账号？点击注册！</Link>
      <button onClick={handleLogin}>提交</button>
    </div>
  )
}

export default LoginPage;