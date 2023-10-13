import React, {useEffect, useState} from 'react';

const ApiCallComponent = () => {
    const [data, setData] = useState([]);

    fetch('http://testbed1.soest.hawaii.edu:2223/bio/getAll', {
        method: 'GET',
        mode: 'no-cors'
    })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.log(error));

    return (
        <div>d</div>
    )
};

export default ApiCallComponent;