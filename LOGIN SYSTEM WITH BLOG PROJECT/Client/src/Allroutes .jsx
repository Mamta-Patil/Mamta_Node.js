import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BlogList from "./pages/BlogList";
import BlogForm from "./pages/BlogForm";
import EditBlog from "./pages/BlogEdit";
import BlogDetails from "./pages/BlogDetails";
import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/sign-in" element={<SignIn/>}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/getallblogs" element={<BlogList />}></Route>
      <Route path="/create" element={<BlogForm />}></Route>
      <Route path="/edit/:blogId" element={<EditBlog />}></Route>
      <Route path="/singleblog/:blogId" element={<BlogDetails />}></Route>
    </Routes>
  );
};

export default Allroutes;
