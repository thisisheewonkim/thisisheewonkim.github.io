import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lab from "./pages/Lab";
import Blog from "./pages/Blog/index";
import About from "./pages/About";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lab" element={<Lab />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/works" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
