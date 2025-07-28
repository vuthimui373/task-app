import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from "@mui/material";
import './App.css';
import customTheme from './theme/customTheme';
import Slidebar  from './components/Slidebar';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <div style={{ display: 'flex' }}>
        <Slidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          {/* Nội dung chính ở đây */}
          <h1>Task App Content</h1>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;