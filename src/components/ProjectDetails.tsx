import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import darkBackground from "../assets/images/bg-dark-projects.png";
import lightBackground from "../assets/images/bg-light.png";

import ThesisProject from "./projects/ThesisProject";
import WindTurbineProject from "./projects/WindTurbineProject";
import SolarProject from "./projects/SolarProject";
import BatteryEnclosureProject from "./projects/BatteryEnclosureProject";

import "../assets/styles/ProjectDetails.scss";
import "../assets/styles/ProjectPages.scss";



function ProjectDetails({mode}: {mode:string}) {


    const {id} = useParams();

    const navigate = useNavigate();



    useEffect(() => {

        window.scrollTo(0,0);

    }, []);





    const projects:any = {

        thesis: ThesisProject,

        capstone: WindTurbineProject,

        solar: SolarProject,

        battery: BatteryEnclosureProject        ,

    };





    const ProjectComponent = projects[id || ""];





    if(!ProjectComponent){

        return <h1>Project Not Found</h1>;

    }





    return (

        <div className="project-page">





            {/* FIXED BACK BUTTON */}

            <button

                className={`back-arrow ${mode}`}

                onClick={() => navigate("/#projects")}

            >

                ←

            </button>







            <div


                className="project-hero"


                style={{


                    backgroundImage:

                    `url(${mode === "dark" ? darkBackground : lightBackground})`


                }}


            >





                <div className="hero-overlay">


                    <h1>

                        <ProjectComponent.Title />

                    </h1>


                </div>




            </div>







            <ProjectComponent.Content />





        </div>

    );


}



export default ProjectDetails;