import { Suspense, lazy } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

// Lazy load non-critical sections
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const Education = lazy(() => import("./sections/Education"));
const Footer = lazy(() => import("./sections/Footer"));

// Placeholder for lazy-loaded sections to prevent layout shift
const SectionPlaceholder = () => <div className="min-h-screen bg-transparent" />;

const App = () => (
  <main className="relative">
    <Navbar />
    <Hero />

    <Suspense fallback={<SectionPlaceholder />}>
      <ShowcaseSection />
      <FeatureCards />
      <Experience />
      <Education />
      <TechStack />
      <Contact />
      <Footer />
    </Suspense>
  </main>
);

export default App;

