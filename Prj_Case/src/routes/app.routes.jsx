import {Routes, Route} from 'react-router-dom';

import { NoteCreation } from '../pages/NoteCreation';
import { NotesShow } from '../pages/NotesShow';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<NotesShow/>}></Route>
            <Route path='/create' element={<NoteCreation/>}></Route>
        </Routes>
    )
}