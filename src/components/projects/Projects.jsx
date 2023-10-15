import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./projects.css";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + slider.current.offsetWidth,
                }
            });
        }, component);
        return () => ctx.revert();
    });

    return (
        <div ref={component} id="projects">
            <div ref={slider} className="container">
                <div className="panel yellow">PROJECTS</div>
                <div className="panel red">ONE</div>
                <div className="panel orange">TWO</div>
                <div className="panel purple">THREE</div>
            </div>
            {/* <div className="lastContainer">Last Container</div> */}
        </div>
    );
}