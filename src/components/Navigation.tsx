import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import "../assets/styles/Navigation.scss";

import resume from "../assets/documents/resume.pdf";



const navItems = [

    ["About","about"],
    ["Expertise","expertise"],
    ["Experience","experience"],
    ["Projects","projects"],
    ["Contact","contact"]

];





function Navigation({parentToChild, modeChange}:any){


    const {mode} = parentToChild;


    const navigate = useNavigate();

    const location = useLocation();


    const [scrolled,setScrolled] = useState(false);






    // Scroll to section after loading from URL

    useEffect(()=>{


        if(location.pathname === "/"){


            const section = location.hash.replace("#","");


            if(section){


                setTimeout(()=>{


                    const element = document.getElementById(section);


                    if(element){


                        element.scrollIntoView({

                            behavior:"smooth"

                        });


                    }


                },100);


            }


        }


    },[location]);








    useEffect(()=>{


        const scroll = ()=>{


            setScrolled(window.scrollY > 50);


        };


        window.addEventListener("scroll",scroll);


        return ()=>window.removeEventListener("scroll",scroll);



    },[]);









    const scrollToSection=(section:string)=>{


        if(location.pathname === "/"){


            const element=document.getElementById(section);


            if(element){


                element.scrollIntoView({

                    behavior:"smooth"

                });


                window.history.replaceState(

                    null,

                    "",

                    `#${section}`

                );


            }


        }


        else{


            navigate(`/#${section}`);


        }



    };









    return (



        <Box>


            <CssBaseline/>




            <AppBar

                component="nav"

                id="navigation"

                className={`navbar-fixed-top ${scrolled?"scrolled":""}`}

            >



                <Toolbar className="navigation-bar">





                    <Box

                        className="mode-toggle"

                        onClick={modeChange}

                    >


                        {

                            mode==="dark"

                            ?

                            <LightModeIcon/>

                            :

                            <DarkModeIcon/>

                        }


                    </Box>







                    <Box className="nav-links">



                        {


                            navItems.map((item)=>(


                                <Button

                                    key={item[0]}

                                    className="nav-button"

                                    onClick={()=>scrollToSection(item[1])}

                                >

                                    {item[0]}

                                </Button>



                            ))



                        }







                        <Button

                            className="nav-button resume-button"

                            href={resume}

                            target="_blank"

                            rel="noreferrer"

                        >

                            Resume

                        </Button>




                    </Box>




                </Toolbar>



            </AppBar>



        </Box>



    );


}



export default Navigation;
