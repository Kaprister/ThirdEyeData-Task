import React from 'react'
import { candidateResumeData } from '../data';
import "./template2.css"


function Template2() {
  return (
    <>
        <div className='main-container'>
            <div class='header'>
              <div class="header-logo">
                <img
                  src="https://github.com/nihal-thirdeye/test/assets/60775543/9b762295-680a-4f51-bdcf-d841cc94fac6"
                  alt="thirdeyedata-logo"
                  height="80"
                  className='logo-img'
                />
              </div>
              <div class='header-content'>
                <p class='template-name header-left'>{candidateResumeData.name}</p>
                <p class='template-name header-center'>{candidateResumeData.current_designation}</p>
                <p class='template-name header-right'></p>
              </div>
              <hr />
            </div>

            <section className='section'>
                <div>
                <h3 className='section-heading'>Profile:</h3>
                <p className='profile-summary '>{candidateResumeData.summary}</p>
                </div>

                {/* Skills */}
                <div className=''>
                    <h3 className='section-heading'>Skills:</h3>
                    <div className='skill-container'>
                        {candidateResumeData.skills.map((skill, index) => (
                            <div key={index}>
                                <h6>{skill.heading}</h6>
                                {skill.related_data.map((item, index) => (
                                    <div className='skill-list' key={index}>
                                        <span className='dot-point'></span>
                                        <span className='skill-data'>{item}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>


                {/* Experience */}
                <div>
                    <h3 className='section-heading'>Experience:</h3>
                    {candidateResumeData.work_experience.map((work, index) => (
                        <div className='exp-section' key={index}>
                            <div className='exp-heading'>
                                <h4 className='expe-heading-comp'>{work.title}</h4>
                                <h4 className='expe-heading-comp'>{work.time_period}</h4>
                            </div>
                            <h4 className='experience-heading'>{work.company}</h4>
                            {work.responsibilities.map((resp, index) => (
                                <div className='skill-list' key={index}>
                                    <span className='dot-point'></span>
                                    <span className='expe-skill-data'>{resp}</span>
                                </div>
                            ))}
                            <div className='skill-list'>
                                <span className='dot-point'></span>
                                <span className='exp-desc-data'>
                                    <span className='desc-head'>Description: </span>
                                    {work.remaining_related_data.Description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className='edu-section'>
                    <h3 className='section-heading'>Education:</h3>
                    {candidateResumeData.education.map((data, index) => (
                        <div className='edu-data'>
                            <div>{data.university} &nbsp;&nbsp;
                                <span className='dot-point'></span>
                                <span>{data.time_period}</span>
                            </div>
                            <div>{data.degree}</div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className=''>
                    <h3 className='section-heading'>Certifications:</h3>
                    <div className='certi-section'>
                        {candidateResumeData.certifications.map((item, index) => (
                            <div className=''>
                                <span className='dot-point'></span>
                                <span className='certi-data'>{item.certification_details}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Template2
