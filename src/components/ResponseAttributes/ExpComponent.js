import React, { useState } from 'react';

const ExpComponent = ({type}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  }
  return (
    <div>
      <div onClick={toggleExpand} style={{ cursor: 'pointer', userSelect: 'none' }}>
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg> <b>experience</b> {type}</h3>
      </div>
      {expanded && (
        <div style={{ marginLeft: 20 }}>
          {/* Company Name  */}
          <div>
            <p><b>companyName</b> string</p>
            <p>Name of company</p>
            <p>Example value: "Santa's Workshop"</p>
          </div>
          {/* Title  */}
          <div style={{ paddingTop: 10}}>
            <p><b>title</b> string</p>
            <p>Position title held</p>
            <p>Example value: "CEO"</p>
          </div>
          {/* Location  */}
          <div style={{ paddingTop: 10}}>
            <p><b>location</b> string</p>
            <p>General location of company/office</p>
            <p>Example value: "North Pole, the Arctic"</p>
          </div>
          {/* Start Date  */}
          <div style={{ paddingTop: 10}}>
            <p><b>startDate</b> string</p>
            <p>Start date of employment</p>
            <p>Example value: "December 1870"</p>
          </div>
          {/* End Date  */}
          <div style={{ paddingTop: 10}}>
            <p><b>endDate</b> string</p>
            <p>End date of employment</p>
            <p>Example value: "Present"</p>
          </div>
          {/* Description  */}
          <div style={{ paddingTop: 10}}>
            <p><b>description</b> string</p>
            <p>Description of job responsibilities, accomplishments, etc</p>
            <p>Example value: "Deliver to over 7 million households a year"</p>
          </div>
        </div>

      )}
    </div>
  )
}

export default ExpComponent;