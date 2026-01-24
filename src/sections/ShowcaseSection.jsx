import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { asset } from "../utils/asset";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={asset("images/Algolens.png")} alt="AlgoLens App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Science , Technology , Engineering , Mathematics ( STEM ) and more made simple with a platform "AlgoLens" covering all the concepts in a visual way.
              </h2>
              <p className="text-white-50 md:text-xl">
                A platform built with React, ES6, CSS3 and TypeScript for a fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src={asset("images/Impression.png")}
                  alt="Impression Platform"
                />
              </div>
              <h2>Impression</h2>
              <p> - A Progressive Web Application built with React , CSS3 and TypeScript to help people prepare for important events related to networking and job search by enabling sentiment analysis scoring on practice sessions for such scenarios.</p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src={asset("images/PlantOS.png")} alt="PlantOS App" />
              </div>
              <h2>PlantOS - A Plant Care Platform</h2>
              <p> - A Progressive Web Application built with React , CSS3 and TypeScript to help people care for their plants by providing them with the necessary information and tools to do so.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
