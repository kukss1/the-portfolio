import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './theme';
import {lightTheme} from './theme'
import { createStyles, CssBaseline } from '@mui/material';

import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


const globalStyles = createStyles({
  '@global': {
    body: {
      backgroundColor: (props) => props.palette.background.default,
    },
  },
});


function App() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleThemeMode = () => {
    console.log('Toggle Theme');
    setThemeMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  console.log('Theme Mode:', themeMode);

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
<CssBaseline sx={globalStyles} />
      <div>
        <Header themeMode={themeMode} onToggleThemeMode={toggleThemeMode} />
        <Aside />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
