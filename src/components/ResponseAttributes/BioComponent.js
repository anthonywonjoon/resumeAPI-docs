import React, { useState } from 'react';

const BioComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  }
  return (
    <div>
      <div onClick={toggleExpand} style={{ cursor: 'pointer', userSelect: 'none' }}>
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg> <b>bio</b> BioEntity</h3>
      </div>
      {expanded && (
        <div style={{ marginLeft: 20 }}>
          {/* Name  */}
          <div>
            <p><b>name</b> string</p>
            <p>First and last name</p>
            <p>Example value: "Santa Claus"</p>
          </div>
          {/* Location  */}
          <div style={{ paddingTop: 10}}>
            <p><b>location</b> string</p>
            <p>General location of where I currently reside</p>
            <p>Example value: "North Pole, the Arctic"</p>
          </div>
          {/* Phone  */}
          <div style={{ paddingTop: 10}}>
            <p><b>phone</b> string</p>
            <p>Up to date phone number to contact</p>
            <p>Example value: "(123)456-7890"</p>
          </div>
          {/* Email  */}
          <div style={{ paddingTop: 10}}>
            <p><b>email</b> string</p>
            <p>Up to date email address to contact</p>
            <p>Example value: "santaclaus@christmas.com"</p>
          </div>
          {/* Linkedin  */}
          <div style={{ paddingTop: 10}}>
            <p><b>linkedin</b> string</p>
            <p>URL address to my LinkedIn</p>
            <p>Example value: "https://linkedin.com/in/santaclaus"</p>
          </div>
          {/* Github  */}
          <div style={{ paddingTop: 10}}>
            <p><b>github</b> string</p>
            <p>URL address to my Github</p>
            <p>Example value: "https://github.com/santaclaus"</p>
          </div>
        </div>

      )}
    </div>
  )
}

export default BioComponent;