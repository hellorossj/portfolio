import React, { useState, useEffect } from "react";

import {
    Main,
    Timeline,
    About,
    Education,
    Expertise,
    Project,
    Contact,
    Navigation,
    Footer,
} from "./components";

import ProjectDetails from "./components/ProjectDetails";

import FadeIn from "./components/FadeIn";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import "./index.scss";






function Home() {


    return (

        <>


            <FadeIn transitionDuration={700}>


                <Main/>

                <About/>
                
                <Education/>

                <Expertise/>

                <Timeline/>

                <Project/>

                <Contact/>


            </FadeIn>



            <Footer/>


        </>

    );


}









function App() {


    const [mode, setMode] = useState<string>("dark");





    const handleModeChange = () => {


        if(mode === "dark") {


            setMode("light");


        } else {


            setMode("dark");


        }


    };







    useEffect(() => {


        window.scrollTo({

            top:0,

            left:0,

            behavior:"smooth"

        });


    }, []);







    return (


        <BrowserRouter basename="/portfolio">



            <div

                className={

                    `main-container ${
                        mode === "dark"
                        ? "dark-mode"
                        : "light-mode"
                    }`

                }

            >





                <Navigation

                    parentToChild={{mode}}

                    modeChange={handleModeChange}

                />






                <Routes>



                    {/* MAIN PORTFOLIO PAGE */}

                    <Route

                        path="/"

                        element={<Home/>}

                    />





                    {/* PROJECT DETAIL PAGES */}

                    <Route

                        path="/projects/:id"

                        element={

                            <ProjectDetails

                                mode={mode}

                            />

                        }

                    />



                </Routes>





            </div>




        </BrowserRouter>


    );


}




export default App;
