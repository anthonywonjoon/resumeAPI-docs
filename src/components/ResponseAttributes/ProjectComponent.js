import React, { useState } from 'react';

const ProjectComponent = ({type}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  }
  return (
    <div>
      <div onClick={toggleExpand} style={{ cursor: 'pointer', userSelect: 'none' }}>
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg> <b>project</b> {type}</h3>
      </div>
      {expanded && (
        <div style={{ marginLeft: 20 }}>
          {/* Project Name  */}
          <div>
            <p><b>projectName</b> string</p>
            <p>Name of Project</p>
            <p>Example value: "Gift Tracker"</p>
          </div>
          {/* Github  */}
          <div style={{ paddingTop: 10}}>
            <p><b>github</b> string</p>
            <p>URL address to Project's Github repository</p>
            <p>Example value: "https://github.com/santaclaus/gift-tracker"</p>
          </div>
          {/* Description  */}
          <div style={{ paddingTop: 10}}>
            <p><b>description</b> string</p>
            <p>Description of project</p>
            <p>Example value: "Tracker for delivering gifts"</p>
          </div>
          {/* Technologies  */}
          <div style={{ paddingTop: 10}}>
            <p><b>technologies</b> string</p>
            <p>List of technologies, languages, frameworks used for the project</p>
            <p>Example value: "React, Spring, Docker"</p>
          </div>
        </div>

      )}
    </div>
  )
}

export default ProjectComponent;