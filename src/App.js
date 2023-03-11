import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    console.log('Toggle Theme');
    setThemeMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  console.log('Theme Mode:', themeMode);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header themeMode={themeMode} onToggleTheme={toggleTheme} />
        <Aside />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
