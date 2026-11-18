import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { PortfolioIntro } from "../view/PortfolioIntro";
import { SectionPage } from "../view/SectionPage";
import { SimpleView } from "../view/SimpleView";
import Footer from "../view/Footer";
import { routes, getRouteByName } from "../model/routes";

// Remembers whether this visitor prefers the Simple view
const VIEW_KEY = "view_mode";

// ?view=simple (shareable link) wins; otherwise use the visitor's last choice
function prefersSimpleView(search: string): boolean {
  const view = new URLSearchParams(search).get("view");
  if (view === "simple") return true;
  if (view === "interactive") return false;
  try {
    return localStorage.getItem(VIEW_KEY) === "simple";
  } catch {
    return false;   // storage blocked (private mode etc.)
  }
}

// Light or dark theme for the interactive view (the Simple view is always light)
export type Theme = "dark" | "light";
const THEME_KEY = "theme";

// ?theme=light (handy for presenting) wins; otherwise the visitor's last choice; dark by default
function preferredTheme(search: string): Theme {
  const theme = new URLSearchParams(search).get("theme");
  if (theme === "light" || theme === "dark") return theme;
  try {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

// Page content components
import About from "../view/pages/About";
import Projects from "../view/pages/Projects";
import Skills from "../view/pages/Skills";
import Contact from "../view/pages/Contact";
import Photography from "../view/pages/Photography";

// Map section names to their page content components
const pageContent: Record<string, React.ReactNode> = {
  About: <About />,
  Projects: <Projects />,
  Skills: <Skills />,
  Contact: <Contact />,
  Photography: <Photography />,
};

// Pages reached by links rather than a circuit trace on the homepage
const extraPages: Record<string, string> = {
  "/photography": "Photography",
};

// Map React Router paths to section names
const pathToSection: Record<string, string> = { ...extraPages };
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

  // Follow the URL, so in-page links (like the footer's Feedback link) and the
  // browser's back/forward buttons switch sections too
  useEffect(() => {
    const section = pathToSection[location.pathname] || null;
    if (section) hasInitialized.current = true;
    setCurrentSection(section);
  }, [location.pathname]);

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

  // Simple view: one light page with everything, for people who just want the info
  const [simple, setSimple] = useState(() => prefersSimpleView(location.search));

  const switchView = useCallback(
    (toSimple: boolean) => {
      setSimple(toSimple);
      try {
        localStorage.setItem(VIEW_KEY, toSimple ? "simple" : "interactive");
      } catch {
        // storage blocked; the choice just won't be remembered
      }
      navigate({ pathname: location.pathname, search: toSimple ? "?view=simple" : "" }, { replace: true });
    },
    [navigate, location.pathname]
  );

  const [theme, setTheme] = useState<Theme>(() => preferredTheme(location.search));

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // storage blocked; the choice just won't be remembered
    }
  }, [theme]);

  if (simple) {
    return <SimpleView onExit={() => switchView(false)} />;
  }

  const cornerButton =
    "px-3 py-1.5 font-mono text-[11px] tracking-widest text-slate-400 border border-slate-700 rounded bg-gray-950/80 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors";

  return (
    // data-theme switches every color on this page via the variables in styles/index.css
    <div data-theme={theme} className="relative w-full h-screen bg-gray-950 overflow-hidden">
      {/* Homepage shortcuts: plain version and light/dark */}
      {!currentSection && (
        <div className="absolute top-4 right-4 z-30 flex gap-2">
          <button onClick={toggleTheme} className={cornerButton} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? "☀ LIGHT" : "☾ DARK"}
          </button>
          <button onClick={() => switchView(true)} className={cornerButton}>
            SIMPLE VIEW
          </button>
        </div>
      )}
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
      <Footer onSimpleView={() => switchView(true)} theme={theme} onToggleTheme={toggleTheme} />
    </div>
  );
}