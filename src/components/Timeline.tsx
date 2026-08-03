import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

import hatchLogo from '../assets/images/hatch.png';
import octaneLogo from '../assets/images/octane.png';
import smithLogo from '../assets/images/smith.png';


function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>

        <VerticalTimeline>

          {/* HATCH */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jul 2026 - Present"
            iconStyle={{ background: 'white', color: '#5000ca' }}
            icon={
              <img 
                src={hatchLogo} 
                alt="Hatch logo"
                className="timeline-logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Mechanical EIT
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hatch | Mississauga, ON
            </h4>
            <p>
              Supporting a large-scale mineral processing facility project as part of the Project Delivery team, contributing to mechanical design packages, equipment lists, material take-offs, and engineering documentation.
            </p>
          </VerticalTimelineElement>


          {/* OCTANE ENGINEERING INTERN */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 - Aug 2025"
            iconStyle={{ background: 'white', color: '#5000ca' }}
            icon={
              <img 
                src={octaneLogo} 
                alt="Octane logo"
                className="timeline-logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Engineering Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Octane Medical Group | Kingston, ON
            </h4>
            <p>
              Developed LabVIEW control and monitoring systems for
              pharmaceutical manufacturing equipment. Optimized medical device
              designs through CAD modelling, simulations, and engineering
              analysis.
            </p>
          </VerticalTimelineElement>


          {/* OCTANE RESEARCH ASSISTANT */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2024 - Aug 2024"
            iconStyle={{ background: 'white', color: '#5000ca' }}
            icon={
              <img 
                src={octaneLogo} 
                alt="Octane logo"
                className="timeline-logo" 
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Octane Medical Group | Kingston, ON
            </h4>
            <p>
              Contributed to the development of tissue-engineered orthopedic
              implants and optimized tangential flow filtration systems for
              medical applications.
            </p>
          </VerticalTimelineElement>


          {/* SMITH ENGINEERING */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 - May 2026"
            iconStyle={{ background: 'white', color: '#5000ca' }}
            icon={
              <img 
                src={smithLogo} 
                alt="Smith Engineering logo"
                className="timeline-logo"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Project Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Smith Engineering | Queen's University
            </h4>
            <p>
              Managed student design teams through project development,
              prototyping, testing, and documentation while providing technical
              mentorship to engineering students.
            </p>
          </VerticalTimelineElement>


        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;