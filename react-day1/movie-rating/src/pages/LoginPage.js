import React, { Component } from 'react';
import styles from './LoginPage.module.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    // 第1步：创建ref
    this.userNameRef = React.createRef();
  }

  componentDidMount() {
    // 直接通过浏览器的DOM API进行操作。不推荐
    // const ele = document.querySelector(`input[name='username']`);
    // ele.focus();

    // 第3步：使用ref
    const userNameInput = this.userNameRef.current;
    userNameInput.focus();
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>登录</h2>

        {/** 第2步： 指定ref */}
        <input ref={this.userNameRef} name="username" placeholder="请输入用户名"></input>
        
        <input name="password" placeholder="请输入密码"></input>
        <button>提交</button>
      </div>
    )
  }
}

export default LoginPage;