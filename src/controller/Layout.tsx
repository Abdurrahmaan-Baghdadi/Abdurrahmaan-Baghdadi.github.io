import { useState, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { PortfolioIntro } from "../view/PortfolioIntro";
import { SectionPage } from "../view/SectionPage";
import Footer from "../view/Footer";
import { routes, getRouteByName } from "../model/routes";

// Page content components
import About from "../view/pages/About";
import Projects from "../view/pages/Projects";
import Skills from "../view/pages/Skills";
import Contact from "../view/pages/Contact";

// Map section names to their page content components
const pageContent: Record<string, React.ReactNode> = {
  About: <About />,
  Projects: <Projects />,
  Skills: <Skills />,
  Contact: <Contact />,
};

// Map React Router paths to section names
const pathToSection: Record<string, string> = {};
routes.forEach((r) => {
  pathToSection[r.path] = r.name;
});

/**
 * Layout Controller
 *
 * Orchestrates the transition between the PortfolioIntro (circuit board homepage)
 * and SectionPage (individual page views). Manages:
 * - Navigation state (which section is active)
 * - AnimatePresence exit/enter transitions
 * - hasInitialized ref (so returning home skips the boot animation)
 * - React Router URL synchronization
 */
export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine initial section from URL (supports direct linking)
  const initialSection = pathToSection[location.pathname] || null;
  const [currentSection, setCurrentSection] = useState<string | null>(initialSection);
  const hasInitialized = useRef(initialSection !== null);

  const handleNavigate = useCallback(
    (section: string) => {
      hasInitialized.current = true;
      setCurrentSection(section);
      const route = getRouteByName(section);
      if (route) {
        navigate(route.path);
      }
    },
    [navigate]
  );

  const handleBack = useCallback(() => {
    setCurrentSection(null);
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative w-full h-screen bg-gray-950 overflow-hidden">
      <AnimatePresence mode="wait">
        {!currentSection ? (
          <PortfolioIntro
            key="intro"
            onNavigate={handleNavigate}
            startExpanded={hasInitialized.current}
          />
        ) : (
          <SectionPage
            key={currentSection}
            section={currentSection}
            onBack={handleBack}
          >
            {pageContent[currentSection]}
          </SectionPage>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}