import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BackToTop from "@/components/BackToTop";

import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Case from "./pages/Case";
import Updates from "./pages/Updates";
import UpdateDetail from "./pages/UpdateDetail";
import Videos from "./pages/Videos";
import Photos from "./pages/Photos";
import Documents from "./pages/Documents";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import Downloads from "./pages/Downloads";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/our-story" element={<OurStory />} />

          <Route path="/case" element={<Case />} />

          <Route path="/updates" element={<Updates />} />
          <Route path="/updates/:slug" element={<UpdateDetail />} />

          <Route path="/videos" element={<Videos />} />

          <Route path="/photos" element={<Photos />} />

          <Route path="/documents" element={<Documents />} />

          <Route path="/downloads" element={<Downloads />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/privacy" element={<Privacy />} />

          <Route path="/terms" element={<Terms />} />

          <Route path="/disclaimer" element={<Disclaimer />} />
        </Route>
      </Routes>

      <BackToTop />
    </>
  );
}