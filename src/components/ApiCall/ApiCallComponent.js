import React, {useEffect, useState} from 'react';

const ApiCallComponent = ({url} ) => {
    const [data, setData] = useState([]);
    const apiUrl = 'http://testbed1.soest.hawaii.edu:2223/api/v1/' + url;

    useEffect(() => {
      console.log("apiUrl: " + apiUrl);
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
    }, []);

    return (
      <div>
        {data ? (
          // Render data in your component
          <pre>
            <code className="json">
              {data}
            </code>
          </pre>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    )
};

export default ApiCallComponent;