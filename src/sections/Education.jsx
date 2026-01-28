import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { educationCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const container = useRef();

    useGSAP(
        () => {
            gsap.utils.toArray(".timeline-card").forEach((card) => {
                gsap.from(card, {
                    xPercent: -100,
                    opacity: 0,
                    transformOrigin: "left left",
                    duration: 1,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                    },
                });
            });

            gsap.to(".timeline", {
                scaleY: 0,
                transformOrigin: "bottom bottom",
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline",
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
            });

            gsap.utils.toArray(".eduText").forEach((text) => {
                gsap.from(text, {
                    opacity: 0,
                    xPercent: 0,
                    duration: 1,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 60%",
                    },
                });
            }, "<");
        },
        { scope: container }
    );

    return (
        <section
            id="education"
            ref={container}
            className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
        >
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Education History"
                    sub="🎓 My Academic Journey"
                />
                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {educationCards.map((card) => (
                            <div key={card.title} className="exp-card-wrapper">
                                <div className="xl:w-2/6">
                                    <GlowCard card={card}>
                                        <div>
                                            <img src={card.imgPath} alt="edu-img" loading="lazy" />
                                        </div>
                                    </GlowCard>
                                </div>
                                <div className="xl:w-4/6">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div className="gradient-line w-1 h-full" />
                                        </div>
                                        <div className="eduText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo">
                                                <img src={card.logoPath} alt="logo" loading="lazy" />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-3xl">{card.title}</h1>
                                                <p className="my-5 text-white-50">
                                                    🗓️&nbsp;{card.date}
                                                </p>
                                                <p className="text-[#839CB5] italic">
                                                    Grade : {card.grade}
                                                </p>
                                                <p className="text-[#839CB5] italic">
                                                    Assessments
                                                </p>
                                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                    {card.responsibilities.map(
                                                        (item, index) => (
                                                            <li key={index} className="text-lg">
                                                                {item}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
