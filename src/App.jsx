import { Suspense, lazy } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import StarsBackground from "./components/StarBackground";
import CustomCursor from "./components/CustomCursor";

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
    <CustomCursor />
    <StarsBackground />
    <Navbar />
    <Hero />

    <Suspense fallback={<SectionPlaceholder />}>
      <ShowcaseSection />
    </Suspense>
    <Suspense fallback={<SectionPlaceholder />}>
      <FeatureCards />
    </Suspense>
    <Suspense fallback={<SectionPlaceholder />}>
      <Experience />
    </Suspense>
    <Suspense fallback={<SectionPlaceholder />}>
      <Education />
    </Suspense>
    <Suspense fallback={<SectionPlaceholder />}>
      <TechStack />
    </Suspense>
    <Suspense fallback={<SectionPlaceholder />}>
      <Contact />
    </Suspense>
    <Suspense fallback={<SectionPlaceholder />}>
      <Footer />
    </Suspense>
  </main>
);

export default App;

