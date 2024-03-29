import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Blogs from "./Pages/BlogPage/Blogs";
import Project from "./Pages/ProjectsPage/Project";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/projects" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
