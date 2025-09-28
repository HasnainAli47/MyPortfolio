import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import BackToTop from "./components/BackToTop";
import SocialSidebar from "./components/SocialSidebar";
import CommandPalette from "./components/CommandPalette";
import Admin from "./pages/Admin";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import React from "react";


function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

function App() {
  const [paletteOpen, setPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e) => {
      const mac = navigator.platform.toUpperCase().includes('MAC');
      if ((mac && e.metaKey && e.key.toLowerCase() === 'k') || (!mac && e.ctrlKey && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <CustomCursor />
        <Header />
        <SocialSidebar />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <BackToTop />
        <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      </div>
    </BrowserRouter>
  );
}

function ScrollToHash() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 0);
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);
  return null;
}

export default App;
