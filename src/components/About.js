import React from 'react';

function About() {
    return (
        // about section starts here
        <section id="about">
            <div className="row">
                <div className="two columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt="profilepic" />
                    <h2>About Me</h2>
                    <p>
                        As an career educator turned web developer, I enjoy creating and contributing to projects that draw on my background in Curricilum Developoment and Instruction and allow me flex skills in the MERN stack.  Projects that seek to address an unmet need or provide an opertunity to help people accomplish more with the help of technology is a fulling way to develop my own skills while hoping to contribute to a broader community.</p>
                </div>
            </div>
        </section>
    );
}

export default About;