import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Menu.module.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: 'light' };
  }

  handleChange = (checked) => {
    const currentTheme = checked ? 'light' : 'dark';
    this.setState({ theme: currentTheme });
    console.log(`Menu context: `, this.context);

    // 5. 在修改context值的地方调用context里定义的回调函数来完成修改
    this.context.updateTheme(currentTheme);
  }

  render() {
    return (
      <div>
        <nav className={styles.menu}>
          <Link to="/">首页</Link>
          <Link to="/about">关于豆苗</Link>
          <Link to="/login">登录</Link>
          <Switch
            width={70}
            onChange={this.handleChange}
            checked={this.state.theme === 'light'}
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  paddingRight: 2,
                }}
              >
                Dark
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  paddingRight: 2,
                }}
              >
                Light
              </div>
            }
          />
        </nav>
      </div>
    );
  }
}

Menu.contextType = ThemeContext;

export default Menu;
