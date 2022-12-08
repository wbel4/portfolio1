export default function ExperienceSection({experiences}) {
    return <div className="root-div">
        <ul className="resume-list">

            {experiences.map((experience, index) => <li key={index}>
                <div className="experience">
                    {index !== (experiences.length - 1) && <span className="line" aria-hidden="true"/>}

                    <div className="job-card">
                        <div className="job-styling">
                            <img
                                className="job-image"
                                src={experience.image}
                                alt=""/>
                        </div>
                        <div className="job-info">
                            <div>
                                <div className="job-title-div">
                                    <h3 className="job-title">{experience.title}</h3>
                                </div>
                                <div>
                                    <p className="company-name">{experience.company}</p>
                                </div>
                                <p className="job-dates">
                                    {experience.start} - {experience.end}
                                </p>
                            </div>
                            <div className="job-description">
                                <p>
                                    {experience.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>)}
        </ul>
    </div>
}