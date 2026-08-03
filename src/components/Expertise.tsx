import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDraftingCompass, faLaptopCode, faGear } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "SOLIDWORKS",
    "AutoCAD",
    "Fusion 360",
    "Onshape",
    "LTspice",
    "FEA",
    "Simulation"
];

const labelsSecond = [
    "LabVIEW",
    "Arduino",
    "NI DAQ",
    "Sensors & Instrumentation",
    "Control Systems",
    "Rapid Prototyping"
];

const labelsThird = [
    "Python",
    "MATLAB",
    "C",
    "LabVIEW"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">

                    {/* FIRST EXPERTISE */}
                    <FontAwesomeIcon icon={faDraftingCompass} size="3x"/>
                    <h3>Mechanical Design & CAD</h3>
                    <p>
                    Designing mechanical systems from concept to prototype using CAD,
                    engineering analysis, and simulation tools.
                    I'm always excited to learn how to use a new software!
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Technical Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* SECOND EXPERTISE */}
                <div className="skill">
                    <FontAwesomeIcon icon={faGear} size="3x"/>
                    <h3>Instrumentation & Prototyping</h3>
                    <p>
                    Developing and testing experimental systems by integrating mechanical, electrical, 
                    and software components. My experience includes instrumentation, data acquisition, 
                    prototype development, and validation testing.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Technical Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* THIRD EXPERTISE */}
                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Computational Modelling</h3>
                    <p>
                    Applying programming and numerical tools to understand, model, and improve engineering systems. I have experience with running simulations, data analysis, and automation using Python, LabVIEW, and C.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Technical Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;