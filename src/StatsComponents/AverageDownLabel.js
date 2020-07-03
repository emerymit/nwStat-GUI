import React, {useState, useEffect} from 'react';

function AverageDownLabel() {
    function formatBitsPerSecond(speed){
        speed = speed / 1000000
        return speed
    }

    const [avgDown, setAvgDown] = useState(0);

    useEffect(() => {
        //hit the end point
        fetch('http://192.168.1.244:3001/AvgDown')
            .then(response =>  {
                //handle the response
                return response.json();
            })
            .then(data => {
                //set the prop
                setAvgDown(formatBitsPerSecond(data[0].avg).toFixed(2))
            });
    },[]);

    return(
        <h3>{avgDown}</h3>
    )

}
export default AverageDownLabel