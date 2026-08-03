import React, { useEffect, useRef, useState } from "react";
import '../assets/styles/Education.scss';

import queens from "../assets/images/queens.png";


const Education = () => {

    const sectionRef = useRef<HTMLDivElement>(null);

    const [progress, setProgress] = useState(0);


    useEffect(() => {

        const handleScroll = () => {

            if (!sectionRef.current) return;


            const section = sectionRef.current;

            const rect = section.getBoundingClientRect();


            const progressValue = Math.min(
                Math.max(
                    -rect.top / (section.offsetHeight - window.innerHeight),
                    0
                ),
                1
            );


            setProgress(progressValue);

        };


        window.addEventListener("scroll", handleScroll);

        handleScroll();


        return () => {
            window.removeEventListener("scroll", handleScroll);
        };


    }, []);



    return (

        <section
            className="education-section"
            ref={sectionRef}
        >

            <div className="education-sticky">


                <div
                    className="education-image"
                    style={{
                        backgroundImage: `url(${queens})`,
                        filter: `blur(${progress * 15}px)`,
                        transform: `scale(${1 + progress * 0.04})`
                    }}
                />


                <div
                    className="education-overlay"
                    style={{
                        opacity: progress * 0.65
                    }}
                />



                <div
                    className="education-text"
                    style={{
                        opacity: Math.min(progress * 1.8, 1),
                        transform:
                            `translateY(${30 - progress * 30}px)`
                    }}
                >

                    <p className="education-body-text">

                        I studied{" "}
                        <strong className="education-highlight">
                            Engineering Physics
                        </strong>{" "}
                        at{" "}
                        <strong className="education-highlight">
                            Queen's University
                        </strong>,
                        specializing in{" "}
                        <strong className="education-highlight">
                            Mechanical Engineering
                        </strong>.

                        My degree combined mechanical design, physics, programming, and experimentation, giving me a multidisciplinary approach to solving engineering problems. During my time at Queen's, I was fortunate to receive recognition through the Dean's List, PEO Scholarship, and Principal's Scholarship.

                    </p>


                </div>


            </div>


        </section>

    );

};


export default Education;