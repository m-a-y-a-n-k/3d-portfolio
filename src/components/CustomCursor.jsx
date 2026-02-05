import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Move cursor and follower
        const moveCursor = (e) => {
            const { clientX, clientY } = e;

            // Basic cursor follows mouse instantly
            gsap.to(cursor, {
                x: clientX,
                y: clientY,
                duration: 0,
            });

            // Follower follows with a slight delay
            gsap.to(follower, {
                x: clientX,
                y: clientY,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseOver = (e) => {
            // Check if the element or its parent is interactive
            const target = e.target;
            const isInteractive =
                target.closest('button') ||
                target.closest('a') ||
                target.closest('.card-border') ||
                target.closest('.cta-button') ||
                target.getAttribute('role') === 'button';

            if (isInteractive) {
                setIsHovering(true);
                gsap.to(follower, {
                    scale: 2.5,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    duration: 0.3,
                });
                gsap.to(cursor, {
                    scale: 0.5,
                    opacity: 0.5,
                    duration: 0.3,
                });
            } else {
                setIsHovering(false);
                gsap.to(follower, {
                    scale: 1,
                    backgroundColor: "transparent",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    duration: 0.3,
                });
                gsap.to(cursor, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                });
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        // Hide default cursor on desktop
        document.body.style.cursor = "none";

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.body.style.cursor = "auto";
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{ transform: "translate(-50%, -50%)" }}
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] flex items-center justify-center transition-opacity duration-300"
                style={{ transform: "translate(-50%, -50%)" }}
            >
                {isHovering && (
                    <div className="w-1 h-1 bg-white/20 rounded-full animate-ping" />
                )}
            </div>
        </>
    );
};

export default CustomCursor;
