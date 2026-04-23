import ScrollToTop from "../components/ScrollToTop";
import FloatingScrollArrow from "./FloatingScrollArrow";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPopup from "../components/LandingPopup";  // ← THIS LINE IS MISSING
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingPopup /> 
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>
      <FloatingScrollArrow />
      <Footer />
    </div>
  );
}