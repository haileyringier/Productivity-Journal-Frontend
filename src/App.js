import React from 'react';
import './App.css';
import 'rsuite/lib/styles/index.less'
import Dashboard from './Dashboard';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './components/Theme'

export default function App(){
  return(
    <div className='App'>
      <ThemeProvider theme={Theme}>
          <Dashboard />
      </ThemeProvider>    
    </div>
  )
}


