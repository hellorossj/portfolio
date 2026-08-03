import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import thesis from '../assets/images/thesis.png';
import capstone from '../assets/images/capstone.png';
import solar from '../assets/images/354.png';
import design from '../assets/images/103.png';

import '../assets/styles/Project.scss';


function Project() {
    const navigate = useNavigate();

    const projects = [

        {
            image: thesis,
            title: "Low-Cost, High Precision Laser Wavemeter Using a Fizeau Wedge Interferometer",
            description:
                "Designed and built a laser wavemeter using Fizeau interferometry, CMOS imaging, and computational fringe analysis with a Raspberry Pi.",
            link: "/projects/thesis"
        },


        {
            image: capstone,
            title: "Hybrid Vertical Axis Wind Turbine",
            description:
                "Designed and prototyped a hybrid Darrieus-Savonius vertical axis wind turbine to harvest vehicle-generated wind energy.",
            link: "/projects/capstone"
        },


        {
            image: solar,
            title: "Integrated Solar Cell Performance Evaluator",
            description:
                "Developed an automated solar characterization system using LabVIEW, Arduino, photodiode measurements, and goniometric stage.",
            link: "/projects/solar"
        },


        {
            image: design,
            title: "Electric Vehicle Battery Enclosure and Thermal Management System",
            description:
                "Designed an electric vehicle battery enclosure for lithium iron phosphate batteries; capable of thermally regulating and protecting the batteries.",
            link: "/projects/battery"
        }

    ];


    return (

        <div className="projects-container" id="projects">

            <h1>Projects</h1>


            <div className="projects-grid">


                {projects.map((project, index) => (

                    <div className="project" key={index}>


                        <Link to={project.link}>

                            <img
                                src={project.image}
                                className="zoom"
                                alt={project.title}
                                width="100%"
                            />

                        </Link>


                        <Link to={project.link}>

                            <h2>
                                {project.title}
                            </h2>

                        </Link>


                        <p>
                            {project.description}
                        </p>


                    </div>

                ))}


            </div>


        </div>

    );

}


export default Project;