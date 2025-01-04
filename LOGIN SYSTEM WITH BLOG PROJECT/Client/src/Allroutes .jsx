import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import Notes from "./pages/Notes";
import NotesDetails from "./pages/NotesDetails";
import CreateNotes from "./pages/CreateNotes";
import EditNotes from "./pages/EditNotes";
import NotesByAdmin from "./pages/NotesByAdmin";
// import SignIn from "./pages/Login";
// import SignUp from "./pages/Singup";
// import Homepage from "./pages/Homepage";
// import Notespage from "./pages/Notespage"
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/sign-in" element={<SignIn/>}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/getallnote" element={<Notes />}></Route>
      <Route path="/getsinglenote/:notesId" element={<NotesDetails />}></Route>
      <Route path="/create" element={<CreateNotes />}></Route>
      <Route path="/edit/:notesId" element={<EditNotes />}></Route>
      <Route path="/getallnotes" element={<NotesByAdmin />}></Route>
      
    </Routes>
  );
};

export default Allroutes;
