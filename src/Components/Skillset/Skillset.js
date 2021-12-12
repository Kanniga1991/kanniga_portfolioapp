import React from 'react';
import {Element} from "react-scroll";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./Skillset.css";

export default function Skillset() {
    return (
        <Element className = "skillcontainer" id = "skills">
            <div className = "skillcontainer_image">
                <img src = "./assests/dev.jpeg" alt = "dev"/>
            </div>
            <div className = "skillcontainer_text">
                <h2>TECHNICAL SKILLS</h2>
                <div className = "skills">
                    <h5>ReactJs</h5>
                    <div className = "skills_slider skills_slider1">
                        <LinearProgress variant = "determinate" value = {90}/>
                    </div>
                </div>
                <div className = "skills">
                    <h5>HTML</h5>
                    <div className = "skills_slider skills_slider2">
                        <LinearProgress variant = "determinate" value = {80}/>
                    </div>
                </div>
                <div className = "skills">
                    <h5>CSS</h5>
                    <div className = "skills_slider skills_slider3">
                        <LinearProgress variant = "determinate" value = {80}/>
                    </div>
                </div>
                <div className = "skills">
                    <h5>Javascript</h5>
                    <div className = "skills_slider skills_slider4">
                        <LinearProgress variant = "determinate" value = {70}/>
                    </div>
                </div>
                <div className = "skills">
                    <h5>NodeJs</h5>
                    <div className = "skills_slider skills_slider5">
                        <LinearProgress variant = "determinate" value = {50}/>
                    </div>
                </div>
                <div className = "skills">
                    <h5>MongoDB</h5>
                    <div className = "skills_slider skills_slider6">
                        <LinearProgress variant = "determinate" value = {50}/>
                    </div>
                </div>
            </div>
        </Element>
    )
}
