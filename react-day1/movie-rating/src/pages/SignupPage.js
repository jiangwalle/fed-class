import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from '../utils/anthentication';
import styles from './SignupPage.module.css';

const SignupPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const genderRef = useRef();

  let navigate = useNavigate();

  const handleSignup = async () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const gender = genderRef.current.value;
    
    try {
      const res = await axios.post('http://localhost:5000/signup', {
        username,
        password,
        firstName,
        lastName,
        gender
      });

      console.log(`Signup succeed: `, res);

      // 注册成功，跳转到登录页
      navigate('/login');
    } catch (e) {
      setErrorMessage(e.response.data.error)
    }
  }

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/');
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2>注册</h2>
      <p className={styles.error}>{errorMessage}</p>
      <form>
        <div>
          <input ref={firstNameRef} name="firstname" placeholder="名字" />
          <input ref={lastNameRef} name="lastname" placeholder="姓" />
        </div>
        <div>
          <input ref={usernameRef} name="username" placeholder="请输入邮箱"></input>
        </div>
        <div>
          <input ref={passwordRef} name="password" placeholder="请输入密码"></input>
        </div>
        <div>
          <input ref={genderRef} name="gender" placeholder="请输入性别"></input>
        </div>
      </form>

      <button onClick={handleSignup}>提交</button>
    </div>
  )
}

export default SignupPage;