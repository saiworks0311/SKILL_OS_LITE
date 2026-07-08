import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard/Dashboard";

import Roadmaps from "./pages/Roadmaps/Roadmaps";
import RoadmapPage from "./pages/Roadmaps/RoadmapPage/RoadmapPage";

import PracticeHub from "./pages/practiceHub/PracticeHub";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/roadmaps" element={<Roadmaps />} />

      <Route
        path="/roadmaps/:slug"
        element={<RoadmapPage />}
      />

      <Route
        path="/practicehub"
        element={<PracticeHub />}
      />
    </Routes>
  );
}

export default App;