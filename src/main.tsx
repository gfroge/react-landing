import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import styled, {ThemeProvider} from 'styled-components'
import './index.css'

const theme = {
  colors: {
    primary: '#28A745',
    primaryHover: '#1f8236',
    secondary: '#333333',
    accent: '#0284D0',
    bgPrimary: '#E5E5E5',
    bgSecondary: '#F4F4F4'
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
)
