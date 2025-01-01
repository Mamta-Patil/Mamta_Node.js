import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

import BlogList from "./pages/BlogList";
import BlogForm from "./pages/BlogForm";
import EditBlog from "./pages/BlogEdit";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/getallblogs" element={<BlogList />}></Route>
      <Route path="/create" element={<BlogForm />}></Route>
      <Route path="/edit/:blogId" element={<EditBlog />}></Route>
    </Routes>
  );
};

export default Allroutes;
