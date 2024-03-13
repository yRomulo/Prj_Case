import React from 'react'
import ReactDOM from 'react-dom/client'


import NotesShow from './pages/NotesShow.jsx'
import { NoteCreation } from './pages/NoteCreation.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteCreation />
  </React.StrictMode>,
)
