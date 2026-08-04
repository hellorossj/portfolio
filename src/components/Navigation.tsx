import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { LiquidGlass } from "@ybouane/liquidglass";

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


    const [isMobile,setIsMobile] = useState(
        window.innerWidth <= 768
    );


    const [mobileOpen,setMobileOpen] = useState(false);



    const glassRoot = useRef<HTMLDivElement>(null);

    const glassElement = useRef<HTMLDivElement>(null);








    // Detect screen size

    useEffect(()=>{


        const resize = ()=>{


            setIsMobile(window.innerWidth <= 768);


            if(window.innerWidth > 768){

                setMobileOpen(false);

            }


        };


        window.addEventListener(
            "resize",
            resize
        );


        return ()=>{

            window.removeEventListener(
                "resize",
                resize
            );

        };


    },[]);










    // Initialize liquid glass

    useEffect(()=>{


        if(!glassRoot.current || !glassElement.current)

            return;



        let instance:any;



        const initializeGlass = async()=>{


            instance = await LiquidGlass.init({

                root:glassRoot.current as HTMLElement,


                glassElements:[

                    glassElement.current as HTMLElement

                ]


            });


        };



        initializeGlass();



        return()=>{


            if(instance){

                instance.destroy();

            }


        };


    },[]);












    // Scroll to hash after loading

    useEffect(()=>{


        if(location.pathname === "/"){


            const section =
            location.hash.replace("#","");



            if(section){


                setTimeout(()=>{


                    const element =
                    document.getElementById(section);



                    if(element){


                        element.scrollIntoView({

                            behavior:"smooth"

                        });


                    }


                },100);


            }


        }


    },[location]);













    // Navbar scroll detection

    useEffect(()=>{


        const scroll = ()=>{


            setScrolled(
                window.scrollY > 50
            );


        };



        window.addEventListener(
            "scroll",
            scroll
        );



        return()=>{


            window.removeEventListener(
                "scroll",
                scroll
            );


        };


    },[]);













    const scrollToSection=(section:string)=>{


        setMobileOpen(false);



        if(location.pathname === "/"){


            const element =
            document.getElementById(section);



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


        <div

            ref={glassRoot}

            className="glass-root"

        >



            <CssBaseline />







            <AppBar

                component="nav"

                id="navigation"

                className={`navbar-fixed-top ${
                    scrolled ? "scrolled" : ""
                }`}

            >







                <div


                    ref={glassElement}


                    className={`glass-navbar ${
                        mobileOpen ? "mobile-expanded" : ""
                    }`}



                    data-config={JSON.stringify({

                        blurAmount:0.10,

                        refraction:1.5,

                        chromAberration:0.2,

                        edgeHighlight:0.45,

                        specular:0.8,

                        fresnel:1.5,

                        cornerRadius:50,

                        zRadius:80,

                        shadowOpacity:0.65,

                        saturation:-0.15,

                        brightness:0.15,

                        bevelMode:0

                    })}



                >







                    <Toolbar className="navigation-bar">







                        {/* DARK MODE BUTTON */}


                        <Box

                            className="mode-toggle"

                            onClick={modeChange}

                        >


                            {

                                mode === "dark"

                                ?

                                <LightModeIcon />

                                :

                                <DarkModeIcon />

                            }


                        </Box>









                        {/* MOBILE MENU ICON */}


                        {

                            isMobile &&


                            <Box

                                className="mobile-menu-button"

                                onClick={()=>setMobileOpen(!mobileOpen)}

                            >

                                {

                                    mobileOpen

                                    ?

                                    <CloseIcon />

                                    :

                                    <MenuIcon />

                                }


                            </Box>


                        }












                        {/* DESKTOP NAVIGATION */}


                        {

                            !isMobile &&


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


                        }




                    </Toolbar>
                                        



                    {/* MOBILE EXPANDED MENU */}


                    {

                        isMobile && mobileOpen &&


                        <Box className="mobile-nav-links">


                            {

                                navItems.map((item)=>(


                                    <Button


                                        key={item[0]}


                                        className="nav-button mobile-nav-button"


                                        onClick={()=>scrollToSection(item[1])}


                                    >


                                        {item[0]}


                                    </Button>


                                ))

                            }





                            <Button

                                className="nav-button mobile-nav-button"

                                href={resume}

                                target="_blank"

                                rel="noreferrer"

                                onClick={()=>setMobileOpen(false)}

                            >


                                Resume


                            </Button>



                        </Box>


                    }




                </div>





            </AppBar>






        </div>


    );


}



export default Navigation;