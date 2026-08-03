import React from "react";

import thesisPhoto1 from "../../assets/images/thesisphoto1.png";
import thesisPhoto2 from "../../assets/images/thesisphoto2.png";
import thesisPhoto3 from "../../assets/images/thesisphoto3.png";

import thesisReport from "../../assets/documents/thesis-report.pdf";

import "../../assets/styles/ProjectPages.scss";


const ThesisProject = {


    Title: () => (

        <>
            Design of a Low Cost, High Precision Laser Wavemeter using a Fizeau Wedge Interferometer
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

                    For my undergraduate thesis in Engineering Physics, I designed and built a low-cost laser wavemeter using a Fizeau wedge interferometer. The goal was to create an affordable alternative to commercial wavelength measurement equipment while maintaining high measurement accuracy.

                </p>


            </section>









            {/* BACKGROUND */}

            <section className="project-section">


                <h2>
                    Background
                </h2>


                <p>

                    Commercial laser wavemeters capable of high precision measurements typically cost thousands of dollars, making them inaccessible for many teaching and research environments. This project explored whether precision optical measurements could be achieved using low-cost hardware and computational analysis.

                </p>


            </section>









            {/* TECHNICAL DETAILS */}

            <section className="project-section">


                <h2>
                    Technical Details
                </h2>



                <p>

                    I designed the optical layout around a fused silica Fizeau wedge interferometer, where interference fringes encode information about the laser wavelength. Before building the final system, I developed Python-based optical models and simulations to optimize key design parameters, including the camera position and laser incidence angle.

                    <br/><br/>

                    The final device combined a CMOS camera with a Raspberry Pi 5 to create a standalone measurement system. I developed the image processing pipeline in Python, using Fast Fourier Transform (FFT)-based fringe analysis to extract the dominant spatial frequency of the interference pattern and calculate the corresponding laser wavelength.

                    The finalized apparatus is shown below.

                </p>





                {/* THESIS PHOTO 3 - APPARATUS */}

                <div className="project-images center">


                    <div className="image-container thesis-photo3">


                        <img

                            src={thesisPhoto3}

                            alt="Complete wavemeter apparatus"

                        />



                        <p className="image-caption">

                            Side view of the complete wavemeter apparatus assembled on an 8" × 8" optical breadboard. Major components are labeled, including the CMOS camera, OLED display, Raspberry Pi 5 enclosure, beam block for optical safety, rotation stage, rotation mount containing the fused silica Fizeau wedge, and optical breadboard.

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

                    Throughout the project, I iterated on both the optical and computational design. Early testing showed that the initial camera setup could not properly resolve the interference fringes, leading me to evaluate alternative imaging hardware and transition to a higher-resolution manual-focus camera.

                    Additional optical simulations were used to refine the system geometry before assembling and testing the final design.

                </p>


            </section>









            {/* RESULTS */}

            <section className="project-section">


                <h2>
                    Results
                </h2>



                <p>

                    The completed wavemeter successfully measured both a 532 nm Nd:YAG (green) laser and a red diode laser, achieving sub-nanometer wavelength accuracy. The resulting interference pattern for the green laser and the corresponding analysis plots are shown below.

                </p>







                {/* THESIS PHOTO 1 + PHOTO 2 */}

                <div className="project-images side">





                    {/* PHOTO 1 */}

                    <div className="image-container thesis-photo1">


                        <img

                            src={thesisPhoto1}

                            alt="Laser interference fringe pattern"

                        />



                        <p className="image-caption">

                            Close-up of the interference fringe pattern produced by the green laser, showing clearly resolved, high-contrast fringes.

                        </p>


                    </div>









                    {/* PHOTO 2 */}

                    <div className="image-container thesis-photo2">


                        <img

                            src={thesisPhoto2}

                            alt="FFT analysis of fringe pattern"

                        />



                        <p className="image-caption">

                            (a) 1D intensity profile extracted from the green laser fringe image (8-bit grayscale pixel intensity, 0–255). (b) FFT of the profile, with the dominant peak used to determine the fringe spacing and wavelength.

                        </p>


                    </div>





                </div>








                <p>

                    The system measured the 532 nm laser with an error of 0.48 nm and was built for a total cost of approximately $973, remaining well below the $1500 budget target.

                    <br/><br/>

                    My complete thesis, including the design process, modelling, experimental testing, and results, is available as a PDF below.

                </p>







                <div className="report-button-container">
    <a
        className="report-button"
        href={thesisReport}
        target="_blank"
        rel="noreferrer"
    >
        View Full Thesis Report (PDF)
    </a>
</div>





            </section>






        </div>

    )



};



export default ThesisProject;