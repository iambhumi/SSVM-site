import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import PrincipalMessage from "./pages/PrincipalMessage";
import Curriculum from "./pages/Curriculum";
import StudentAchievements from "./pages/StudentAchievements";
import SchoolAchievements from "./pages/SchoolAchievements";
import Faculty from "./pages/Faculty";
import Alumni from "./pages/Alumni";
import Events from "./pages/Events";
import Notices from "./pages/Notices";
import Announcements from "./pages/Announcements";
import PhotoAlbum from "./pages/PhotoAlbum";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="principal-message" element={<PrincipalMessage />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="student-achievements" element={<StudentAchievements />} />
          <Route path="school-achievements" element={<SchoolAchievements />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="events" element={<Events />} />
          <Route path="notices" element={<Notices />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="photo-album" element={<PhotoAlbum />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
