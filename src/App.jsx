import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import StudentAchievements from "./pages/StudentAchievements";
import Faculty from "./pages/Faculty";
import Facility from "./pages/Facility";
import SchoolRules from "./pages/SchoolRules";
import Events from "./pages/Events";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
          
          <Route path="student-achievements" element={<StudentAchievements />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="facility" element={<Facility />} />
          <Route path="/school-rules" element={<SchoolRules />} />
          <Route path="events" element={<Events />} />
          
          
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
