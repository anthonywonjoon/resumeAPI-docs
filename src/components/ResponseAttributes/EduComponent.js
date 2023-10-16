import React, { useState } from 'react';

const EduComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  }
  return (
    <div>
      <div onClick={toggleExpand} style={{ cursor: 'pointer', userSelect: 'none' }}>
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg> <b>education</b> EducationEntity</h3>
      </div>
      {expanded && (
        <div style={{ marginLeft: 20 }}>
          {/* Institution  */}
          <div>
            <p><b>institution</b> string</p>
            <p>Name of the University/Institution</p>
            <p>Example value: "University of the North Pole"</p>
          </div>
          {/* Grad Date */}
          <div style={{ paddingTop: 10}}>
            <p><b>gradDate</b> string</p>
            <p>Expected or actual graduation date from listed institution</p>
            <p>Example value: "Spring 2023"</p>
          </div>
          {/* Degree  */}
          <div style={{ paddingTop: 10}}>
            <p><b>degree</b> string</p>
            <p>Type of degree obtained</p>
            <p>Example value: "BBA"</p>
          </div>
          {/* Majors  */}
          <div style={{ paddingTop: 10}}>
            <p><b>majors</b> string</p>
            <p>Majors for the degree</p>
            <p>Example value: "Business"</p>
          </div>
          {/* Minors  */}
          <div style={{ paddingTop: 10}}>
            <p><b>minor</b> string</p>
            <p>Supplementary minors to the main degree</p>
            <p>Example value: "Computer Science"</p>
          </div>
          {/* Relevant Courses  */}
          <div style={{ paddingTop: 10}}>
            <p><b>relevantCourses</b> string</p>
            <p>List of relevant courses towards desired industry</p>
            <p>Example value: "Introduction to Computer Science I"</p>
          </div>
        </div>

      )}
    </div>
  )
}

export default EduComponent;