import React from 'react';

// 1. 创建context
const ThemeContext = React.createContext({
  theme: 'light',
  changeTheme: (theme) => {
    this.theme = theme;
  }
});
const ThemeContextProvider = ThemeContext.Provider;

export { 
  ThemeContext,
  ThemeContextProvider
};
