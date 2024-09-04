import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about centered">
            <div className="about-story">
            <span className="about-line" id="1">Hi, I'm Alex, a jewelry maker who also studies Computer Science at Purdue. </span>
            <span className="about-line" id="2">I do most of my jeweler-ing in Connecticut though, working as an apprentice for a store named <a className="indoxi-link" href="https://www.indoxijewelry.com/">indoxi</a>. </span>
            <span className="about-line" id="3">Although I'm still getting the hang of it, I made this portfolio to show off some of my creations, all of which I am very proud of, and I hope you enjoy them too!</span>
            </div>
            <div className="about-contact">
                <span className="about-line" id="4">Feel free to check out my <a className="pw-link" href="https://alextu.co">personal website</a>, or contact me at <a className="mail-link" href="mailto:tu96@purdue.edu">tu96@purdue.edu</a></span>
            </div>
        </div>
    );
}

export default About;