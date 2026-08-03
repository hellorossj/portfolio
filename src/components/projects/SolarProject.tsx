import React from "react";

import solarPhoto1 from "../../assets/images/solarphoto1.png";
import solarPhoto2 from "../../assets/images/solarphoto2.png";
import solarPhoto3 from "../../assets/images/solarphoto3.png";

import "../../assets/styles/ProjectPages.scss";


const SolarProject = {


    Title: () => (

        <>
            Integrated Solar Cell Performance Evaluator
        </>

    ),




    Content: () => (

        <div className="project-content">





            {/* OVERVIEW */}

            <section className="project-section">


                <h2>
                    Overview
                </h2>


                <p>

                    My third-year Engineering Physics design project involved developing a portable solar cell performance evaluator with a team three other classmates, taking the project from initial concept to a fully functional prototype.

                    <br/><br/>

                    The goal of the project was to create a low-cost system capable of automatically characterizing solar cells through illuminated and dark current-voltage (I-V) measurements. The device integrated custom electronics, embedded software, and a 3D-printed enclosure.
                    <br/><br/>

                    I contributed to the mechanical design, programming, system integration, testing, and debugging of the final device. The completed prototype was capable of generating solar cell performance data and displaying results through a custom graphical interface.

                </p>


            </section>







            {/* BACKGROUND */}

            <section className="project-section">


                <h2>
                    Background
                </h2>


                <p>

                    Current-voltage (I-V) characterization is an important method for evaluating photovoltaic devices by determining key performance parameters such as current output, voltage response, and overall efficiency.

                    <br/><br/>

                    However, commercial solar cell characterization equipment can be expensive and difficult to transport. Our team investigated whether a compact, automated, and affordable alternative could be developed for educational and research applications.

                    <br/><br/>

                    The final system was designed to provide controlled illumination, automated voltage sweeps, and real-time measurement of solar cell electrical performance.

                </p>


            </section>







            {/* TECHNICAL DETAILS */}

            <section className="project-section">


                <h2>
                    Technical Details
                </h2>


                <p>

                    The final design combined custom electronics, mechanical packaging, and software for automated data collection and visualization.

                </p>




                <ul className="turbine-details-list">

                    <li>
                        Transimpedance amplifier circuitry for accurate current measurement
                    </li>


                    <li>
                        LED illumination system for controlled solar cell testing conditions
                    </li>


                    <li>
                        Automated voltage sweeping to generate current-voltage characteristics
                    </li>


                    <li>
                        Python-based graphical interface for data collection and visualization
                    </li>


                    <li>
                        3D-printed enclosure designed for compact integration of the complete system
                    </li>


                </ul>






                {/* MAIN IMAGE */}

                <div className="solar-image-container">


                    <img

                        src={solarPhoto1}

                        alt="Solar Cell Evaluator"

                    />


                    <p className="image-caption">

                        Final 3D printed enclosure design. (a) and (b) show the front and top views of the device with the lid removed.

                    </p>


                </div>


            </section>









            {/* CHALLENGES */}

            <section className="project-section">


                <h2>
                    Challenges
                </h2>


                <p>

                    The main engineering challenge was integrating the electrical, mechanical, and software components into a reliable measurement system while maintaining accurate current measurements over a wide operating range.

                    <br/><br/>

                    Additionally, the team had to quickly learn and implement LabVIEW, a software platform we had no prior experience with, to develop the control and monitoring system.
 <br/><br/>
                    Significant debugging was required to reduce electrical noise and calibrate the measurement circuitry. The mechanical enclosure also required multiple design iterations to ensure proper component integration and accessibility.

                </p>


            </section>









            {/* RESULTS */}

            <section className="project-section">


                <h2>
                    Results
                </h2>


                <p>

                    The project resulted in a fully functional portable solar cell characterization system capable of automatically measuring illuminated and dark I-V curves.

                </p>



                <ul className="turbine-details-list">


                    <li>
                        Successfully generated illuminated and dark solar cell I-V characteristics
                    </li>


                    <li>
                        Integrated custom electronics, software, and mechanical packaging into a complete prototype
                    </li>


                    <li>
                        Developed automated measurement and visualization software
                    </li>


                    <li>
                        Demonstrated a low-cost alternative to traditional solar cell characterization equipment
                    </li>


                </ul>



            </section>









            {/* FINAL TESTING IMAGES */}

            <section className="project-section">


                <h2>
                    Solar Cell Characterization Results
                </h2>





                <div className="project-images side">



                    <div className="solar-photo2">


                        <img

                            src={solarPhoto2}

                            alt="Illuminated I-V Curve"

                        />


                        <p className="image-caption">

                            Illuminated I-V curve measured using the integrated LED illumination system.

                        </p>


                    </div>







                    <div className="solar-photo3">


                        <img

                            src={solarPhoto3}

                            alt="Dark I-V Curve"

                        />


                        <p className="image-caption">

                            Dark I-V curve showing the measured voltage and current response of the solar cell.

                        </p>


                    </div>



                </div>



            </section>







        </div>

    )


};


export default SolarProject;