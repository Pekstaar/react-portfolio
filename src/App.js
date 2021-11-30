// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateProject from "./pages/CreateProject";
import LandingPage from "./pages/LandingPage";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/007146new" element={<CreateProject />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/" exact element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
