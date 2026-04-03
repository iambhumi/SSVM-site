import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import StudentAchievements from "./pages/StudentAchievements";
import SchoolAchievements from "./pages/SchoolAchievements";
import Faculty from "./pages/Faculty";
import Facility from "./pages/Facility";
import Alumni from "./pages/Alumni";
import Events from "./pages/Events";
import Notices from "./pages/Notices";
import Announcements from "./pages/Announcements";

import Contact from "./pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="student-achievements" element={<StudentAchievements />} />
          <Route path="school-achievements" element={<SchoolAchievements />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="facility" element={<Facility />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="events" element={<Events />} />
          <Route path="notices" element={<Notices />} />
          <Route path="announcements" element={<Announcements />} />
          
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
