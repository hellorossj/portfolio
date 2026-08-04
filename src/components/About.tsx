import React from "react";
import { useInView } from "react-intersection-observer";

import photo1 from "../assets/images/photo1.png";
import photo2 from "../assets/images/photo2.png";
import photo3 from "../assets/images/photo3.png";
import photo4 from "../assets/images/photo4.png";

import "../assets/styles/About.scss";


function About() {


    const { ref: aboutRef, inView: aboutVisible } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });


    const { ref: galleryRef, inView: galleryVisible } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });



    return (

        <div className="about-container" id="about">



            {/* Main About Section */}
            <div
                ref={aboutRef}
                className={
                    aboutVisible
                    ? "about-top fade-in show"
                    : "about-top fade-in"
                }
            >


                {/* Profile Picture */}
                <div className="about-headshot">

                    <img
                        src={photo1}
                        alt="Ross graduation"
                    />

                </div>




                {/* Bio */}
                <div className="about-text">


                    <h1 className="about-title">
                        Hi, I'm Ross!
                    </h1>



                    <p>
    I'm a Mechanical Engineer-in-Training with a background in
    Engineering Physics, specializing in Mechanical Engineering from
    Queen's University.
</p>



<p>
    My experience spans medical devices, renewable energy systems,
    optical instrumentation, and automation. Through hands-on design,
    prototyping, and testing, I have developed experience taking
    engineering concepts from initial ideas through to functional
    prototypes.
</p>



<p>
    Outside of engineering, I enjoy exploring new places, staying active, and taking on new challenges. Whether it's skiing in the mountains, hiking through new landscapes, or experiencing different cultures while travelling, I enjoy pushing myself outside of my comfort zone and learning through new experiences.
</p>


                </div>


            </div>






            {/* Travel Gallery */}
            <div
                ref={galleryRef}
                className={
                    galleryVisible
                    ? "about-gallery fade-in show"
                    : "about-gallery fade-in"
                }
            >



                <div className="gallery-image">

                    <img
                        src={photo2}
                        alt="Kicking Horse Mt., Canada"
                    />


                    <div className="image-overlay">

                        <h3>
                            Kicking Horse Mt., Canada
                        </h3>

                    </div>

                </div>





                <div className="gallery-image">

                    <img
                        src={photo3}
                        alt="Machu Picchu, Peru"
                    />


                    <div className="image-overlay">

                        <h3>
                            Machu Picchu, Peru
                        </h3>

                    </div>

                </div>






                <div className="gallery-image">

                    <img
                        src={photo4}
                        alt="Paraty, Brazil"
                    />


                    <div className="image-overlay">

                        <h3>
                            Paraty, Brazil
                        </h3>

                    </div>

                </div>



            </div>



        </div>

    );

}


export default About;