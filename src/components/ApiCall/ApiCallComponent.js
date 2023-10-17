import React, {useEffect, useState} from 'react';
import CodeBlock from '@theme/CodeBlock';
import './apiCallComponent-style.css'

const ApiCallComponent = ({url} ) => {
    const [data, setData] = useState([]);
    const apiUrl = 'https://resume-api-fnk7.onrender.com/api/v1/' + url;
    const endpoint = "/api/v1/" + url;

    function apiCall() {
      fetch(apiUrl, {
        method: 'GET',
      })
        .then(response => response.text())
        .then(data => {
          let dataObj = JSON.parse(data);
          data =JSON.stringify(dataObj, null, 2);
          setData(data);
        })
        .catch(error => console.log(error));
    }

    return (
      <div>
        <button className="apiButton" onClick={apiCall}>Call {endpoint}</button>
        {data &&
          <pre>
            <CodeBlock
              className="apiWindow"
              language="json"
              title="/api/v1/fullResume"
              showLineNumbers>
              {data}
            </CodeBlock>
          </pre>
          }
      </div>
    )
    /*
    return (
      <Col>
        {data ? (
          // Render data in your component
          <pre>
            <CodeBlock
              className="apiWindow"
              language="json"
              title="/api/v1/fullResume"
              showLineNumbers>
              {data}
            </CodeBlock>
          </pre>
        ) : (
          <p>Loading data...</p>
        )}
      </Col>
    )
    */
};

export default ApiCallComponent;