// App.js
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import VideoList from "./components/VideoList";
import VideoPage from "./components/VideoPage";
import Navbar from "./pages/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/video/:postId" element={<VideoPage />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
