import React, { useState } from 'react';

const ActivityComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  }
  return (
    <div>
      <div onClick={toggleExpand} style={{ cursor: 'pointer', userSelect: 'none' }}>
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg> <b>activity</b> array of ActivityEntity</h3>
      </div>
      {expanded && (
        <div style={{ marginLeft: 20 }}>
          {/* Organization */}
          <div>
            <p><b>organization</b> string</p>
            <p>Name of organization</p>
            <p>Example value: "Holiday Club"</p>
          </div>
          {/* Position  */}
          <div style={{ paddingTop: 10}}>
            <p><b>position</b> string</p>
            <p>Position title held</p>
            <p>Example value: "Head of Christmas Committee"</p>
          </div>
          {/* Start Date  */}
          <div style={{ paddingTop: 10}}>
            <p><b>startDate</b> string</p>
            <p>Start date of extracurricular</p>
            <p>Example value: "December 1870"</p>
          </div>
          {/* End Date  */}
          <div style={{ paddingTop: 10}}>
            <p><b>endDate</b> string</p>
            <p>End date of extracurricular</p>
            <p>Example value: "Present"</p>
          </div>
          {/* Description  */}
          <div style={{ paddingTop: 10}}>
            <p><b>description</b> string</p>
            <p>Description of position responsibilities, club purpose, etc</p>
            <p>Example value: "Created outlines of when holidays should begin to celebrate throughout the year"</p>
          </div>
        </div>

      )}
    </div>
  )
}

export default ActivityComponent;