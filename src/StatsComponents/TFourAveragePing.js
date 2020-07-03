import React, {useState, useEffect} from 'react';

function TFourAveragePing(props) {
    function formatBitsPerSecond(speed){
        speed = speed / 1000000
        return speed
    }

    const [avgPing, setAvgPing] = useState(0);

    useEffect(() => {
        //hit the end point
        fetch('http://192.168.1.244:3001/YdAvgPing')
            .then(response =>  {
                //handle the response
                return response.json();
            })
            .then(data => {
                //set the prop
                console.log(data)
                setAvgPing(parseFloat(data[0].avg).toFixed(2))
            });
    },[]);

    return(
        <h3>{avgPing}</h3>
    )

}
export default TFourAveragePing