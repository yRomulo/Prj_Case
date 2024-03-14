import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'

import NotesShow from './pages/NotesShow/index.jsx'
import { NoteCreation } from './pages/NoteCreation/index.jsx'
import { ThemeProvider } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NotesShow/>}></Route>
          <Route path='/create' element={<NoteCreation/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  </React.StrictMode>,
)
