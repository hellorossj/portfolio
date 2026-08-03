import React from "react";

import turbinePhoto1 from "../../assets/images/turbinephoto1.png";
import turbinePhoto2 from "../../assets/images/turbinephoto2.png";
import turbineVideo from "../../assets/videos/turbinevideo.mp4";

import "../../assets/styles/ProjectPages.scss";


const WindTurbineProject = {


    Title: () => (

        <>
            Hybrid Vertical Axis Wind Turbine
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

                    My Engineering Physics capstone project involved designing and building a hybrid vertical axis wind turbine with a team of four classmates, taking the project from initial concept to experimental testing.

                    <br/><br/>

                    The goal of the project was to develop a small-scale renewable energy system capable of supplementing solar-powered roadside lighting. We explored whether wind generation could improve reliability during periods of reduced solar availability, such as overnight operation and the winter months.

                    <br/><br/>

                    I contributed to the mechanical design, CAD modelling, fabrication, assembly, and testing of the turbine system. The final prototype combined a Savonius rotor, designed to provide reliable startup at low wind speeds, with a Darrieus rotor optimized for improved efficiency during operation.

                </p>


            </section>





            {/* BACKGROUND */}

            <section className="project-section">


                <h2>
                    Background
                </h2>


                <p>

                    Some roadside lighting systems rely primarily on solar panels, but their energy generation decreases during periods of limited sunlight. Our team investigated whether a hybrid wind-solar approach could provide a more reliable renewable energy solution.

                    <br/><br/>

                    A vertical axis wind turbine was selected due to its ability to capture wind from multiple directions and its suitability for turbulent environments such as roadsides and urban areas. Its compact design also provides advantages for integration with existing infrastructure.

                    <br/><br/>

                    The final design used a hybrid Darrieus-Savonius configuration. The Savonius rotor improves low-speed startup performance by generating higher torque, while the Darrieus rotor provides more efficient energy generation once the turbine reaches operating speed.

                </p>


            </section>







            {/* TECHNICAL DETAILS */}

            <section className="project-section">


                <h2>
                    Technical Details
                </h2>


                <p>

                    I designed and developed the turbine using SolidWorks and supported the iterative design process through simulation, fabrication, and testing.

                </p>



                <ul className="turbine-details-list">

                    <li>
                        Three helical Darrieus blades based on a NACA 0015 airfoil profile for lift-based power generation
                    </li>


                    <li>
                        Two aluminum Savonius scoops to improve startup performance
                    </li>


                    <li>
                        A 60° helical twist to reduce torque fluctuations and improve rotational stability
                    </li>


                    <li>
                        3D-printed blade sections to enable rapid prototyping and manufacturing
                    </li>


                    <li>
                        An MXUS XF40 hub motor configured as a generator
                    </li>


                    <li>
                        A three-phase rectification circuit to convert generator output into DC power
                    </li>


                    <li>
                        An Arduino-based data acquisition system to monitor RPM, voltage, current, and power output
                    </li>


                    <li>
                        A mechanical disc brake system for safe operation and controlled shutdown
                    </li>


                </ul>





                {/* IMAGES */}

                <div className="turbine-images">


                    <div className="turbine-image-container">


                        <img

                            src={turbinePhoto1}

                            alt="Hybrid vertical axis wind turbine mechanical design"

                        />


                        <p className="image-caption">

                            Mechanical system showing 3 outer helical Darrieus blades and the inner Savonius scoops. (a) Shows the design from an isometric view and (b) from the top-down.

                        </p>


                    </div>






                    <div className="turbine-image-container">


                        <img

                            src={turbinePhoto2}

                            alt="Mechanical disc brake system"

                        />


                        <p className="image-caption">

                            Mechanical disc brake mounting on the generator showing how the brake caliper is mounted.

                        </p>


                    </div>


                </div>



            </section>









            {/* CHALLENGES */}

            <section className="project-section">


                <h2>
                    Challenges
                </h2>


                <p>

                    The primary challenge throughout the project was balancing turbine startup performance with electrical power generation.

                    <br/><br/>

                    Initial testing showed that the turbine rotor was capable of producing aerodynamic torque, but the generator introduced significantly higher resistance than expected. This prevented the system from reliably self-starting under realistic wind conditions.

                    <br/><br/>

                    To address this issue, I helped redesign the drivetrain and integrate a 10:1 planetary gearbox to reduce the startup torque requirement. This modification allowed the turbine to self-start successfully, but introduced a trade-off by reducing the final electrical power output.

                </p>


            </section>









            {/* RESULTS */}

            <section className="project-section">


                <h2>
                    Results
                </h2>


                <p>

                    The project resulted in a fully functional hybrid vertical axis wind turbine prototype that was successfully designed, manufactured, and tested.

                </p>



                <ul className="turbine-details-list">


                    <li>
                        Demonstrated reliable self-starting after drivetrain modifications
                    </li>


                    <li>
                        Produced measurable electrical power from the turbine generator
                    </li>


                    <li>
                        Integrated mechanical safety features for controlled testing
                    </li>


                    <li>
                        Enabled real-time monitoring of turbine performance through Arduino-based measurements
                    </li>


                </ul>




                <p>

                    Check out the video below of our turbine in action!

                </p>





                {/* VIDEO */}

                <div className="turbine-video">


                    <video controls>


                        <source

                            src={turbineVideo}

                            type="video/mp4"

                        />


                        Your browser does not support the video tag.


                    </video>


                </div>



            </section>





        </div>

    )


};


export default WindTurbineProject;