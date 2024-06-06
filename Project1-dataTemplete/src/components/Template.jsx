import React from 'react';
import { candidateResumeData } from './data';
import './template.css'; // Import your custom CSS file

function Template() {
  return (
    <div className='main-container'>
      <section className='profile-section'>
        <div className='profile-heading'>
          <h4 className='name'>{candidateResumeData.name}</h4>
          <h5 className='designation'>{candidateResumeData.current_designation}</h5>
        </div>
        <div className='divider'></div>
      </section>

      <section className='section'>
        <div>
          <h3 className='section-heading'>Profile:</h3>
          <p className='profile-summary '>{candidateResumeData.summary}</p>
        </div>

        {/* Skills */}
        <div className='skills-container'>
            <h3 className='section-heading'>Skills:</h3>
            <table className='skills-table'>
                <thead>
                <tr>
                    <th>Skill Category</th>
                    <th>Skill</th>
                </tr>
                </thead>
                <tbody>
                {candidateResumeData.skills.map((skill, index) => (
                    <React.Fragment key={index}>
                    <tr>
                        <td rowSpan={skill.related_data.length}>{skill.heading}</td>
                        <td>{skill.related_data[0]}</td>
                    </tr>
                    {skill.related_data.slice(1).map((item, idx) => (
                        <tr key={idx}>
                        <td>{item}</td>
                        </tr>
                    ))}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        </div>


        {/* Experience */}
        <div>
          <h3 className='section-heading'>Experience:</h3>
          <table className='experience-table'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Time Period</th>
                <th>Responsibilities</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {candidateResumeData.work_experience.map((work, index) => (
                <tr key={index}>
                  <td>{work.title}</td>
                  <td>{work.company}</td>
                  <td>{work.location}</td>
                  <td>{work.time_period}</td>
                  <td>
                    <ul className='list-disc pl-5'>
                      {work.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{work.remaining_related_data.Description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Education */}
        <div>
          <h3 className='section-heading'>Education:</h3>
          <table className='education-table'>
            <thead>
              <tr>
                <th>Degree</th>
                <th>University</th>
                <th>Location</th>
                <th>Time Period</th>
              </tr>
            </thead>
            <tbody>
              {candidateResumeData.education.map((edu, index) => (
                <tr key={index}>
                  <td>{edu.degree}</td>
                  <td>{edu.university}</td>
                  <td>{edu.location}</td>
                  <td>{edu.time_period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Certifications */}
        <div>
          <h3 className='section-heading'>Certifications:</h3>
          <table className='certifications-table'>
            <thead>
              <tr>
                <th>Certification Details</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {candidateResumeData.certifications.map((certification, index) => (
                <tr key={index}>
                  <td>{certification.certification_details}</td>
                  <td>{certification.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Template;

