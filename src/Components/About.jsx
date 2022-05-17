import React from 'react';
import aboutimage from '../images/hero.png'


function About() {
return (
    <div className="about">
        <div className="about-model">
            <img src={aboutimage} alt="about image" />
        </div>
        <div className="about-text">
            <h2>
                We are the best <br /> Real Estate Company{" "}
            </h2>
            <p>
            My Question is: Is the div elements cannot be done to that particular
            Component? I've done searching Here but div elements exists.
            <br />
            Error boundaries are React components that catch JavaScript errors
            anywhere in their child component tree, log those errors, and display a
            fallback UI
            </p>
        <button>View More details</button>
        </div>
    </div>
)
}

export default About