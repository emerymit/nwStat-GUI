import React, {useState, useEffect} from 'react';

function AveragePingLabel() {
    
    const [avgPing, setAvgPing] = useState(0);

    useEffect(() => {
        //hit the end point
        fetch('http://192.168.1.244:3001/AvgPing')
            .then(response =>  {
                //handle the response
                return response.json();
            })
            .then(data => {
                //set the prop
                // console.log(typeof(parseInt(data[0].avg)))
                setAvgPing(parseFloat(data[0].avg).toFixed(2))
            });
    },[]);

    return(
        <h3>{avgPing}</h3>
    )

}
export default AveragePingLabel