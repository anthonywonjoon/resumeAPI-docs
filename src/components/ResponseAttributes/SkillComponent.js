import React, { useState } from 'react';

const SkillComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  }
  return (
    <div>
      <div onClick={toggleExpand} style={{ cursor: 'pointer', userSelect: 'none' }}>
        <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg> <b>skill</b> array of SkillEntity</h3>
      </div>
      {expanded && (
        <div style={{ marginLeft: 20 }}>
          {/* Skill Name  */}
          <div>
            <p><b>skillName</b> string</p>
            <p>Name of skill</p>
            <p>Example value: "Java"</p>
          </div>
          {/* Skill Type  */}
          <div style={{ paddingTop: 10}}>
            <p><b>skillType</b> string</p>
            <p>Type of skill i.e. language, framework, platform, etc</p>
            <p>Example value: "Language"</p>
          </div>
          {/* Related Projects  */}
          <div style={{ paddingTop: 10}}>
            <p><b>relatedProjects</b> string</p>
            <p>List of projects that showcase this skill</p>
            <p>Example value: "Gift tracker"</p>
          </div>
        </div>

      )}
    </div>
  )
}

export default SkillComponent;