import React from "react";

export default function ({title, desc, img, link, skills}){
    return <div className="project-card">
        <div className="project-card-img">
            <img className="project-img"
                 src={img}
                 alt=""/>
        </div>
        <div className="project-info">
            <div className="project-info-struct">
                <a href={link} className="project-link">
                    <h3 className="project-title">
                        {title}
                    </h3>
                    <p className="project-description">
                        {desc}
                    </p>
                </a>
            </div>
            <div className="skills-list">
                <ul className="skills-list">{skills.map((skill, index) => <li key={index} className="skill">{skill}</li>)}</ul>
            </div>
        </div>
    </div>
}
