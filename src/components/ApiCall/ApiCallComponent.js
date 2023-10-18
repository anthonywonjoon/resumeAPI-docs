import React, {useEffect, useState} from 'react';
import CodeBlock from '@theme/CodeBlock';
import './apiCallComponent-style.css'

const ApiCallComponent = ({url} ) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const apiUrl = 'https://resume-api-fnk7.onrender.com/api/v1/' + url;
    const endpoint = "/api/v1/" + url;

    function apiCall() {
        setLoading(true);
      fetch(apiUrl, {
        method: 'GET',
      })
        .then(response => response.text())
        .then(data => {
          let dataObj = JSON.parse(data);
          data =JSON.stringify(dataObj, null, 2);
          setData(data);
        })
        .catch(error => console.log(error))
        .finally(() => {
            setLoading(false);
        })
    }

    return (
      <div>
        <button className="apiButton" onClick={apiCall}>{loading ? <>Loading..</> : <>Call {endpoint}</>}</button>
        {data &&
          <pre>
            <CodeBlock
              className="apiWindow"
              language="json"
              title={endpoint}
              showLineNumbers>
              {data}
            </CodeBlock>
          </pre>
          }
      </div>
    )
};

export default ApiCallComponent;