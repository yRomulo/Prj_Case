import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NotesShow from './pages/NotesShow/NotesShow.jsx'
import { NoteCreation } from './pages/NoteCreation/NoteCreation.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NotesShow/>}></Route>
        <Route path='/create' element={<NoteCreation/>}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
