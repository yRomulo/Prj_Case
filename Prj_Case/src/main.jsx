import React from 'react'
import ReactDOM from 'react-dom/client'


import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'

import {Routes} from './routes'
import { NoteCreation } from './pages/NoteCreation/index.jsx'
import { ThemeProvider } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>

  </React.StrictMode>,
)
