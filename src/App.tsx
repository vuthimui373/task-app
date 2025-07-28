import React, {FC, ReactElement} from 'react';
import { ThemeProvider, CssBaseline } from "@mui/material";
import './App.css';
import customTheme from './theme/customTheme';
import { Dashboard } from './pages/dashboard/dashboard';
const App: FC = ():ReactElement=>{
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
      <Dashboard/>
      </CssBaseline>
          
    </ThemeProvider >

  );
  
}
export default App;
