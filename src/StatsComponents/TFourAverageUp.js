import React, {useState, useEffect} from 'react';

function TFourAverageUp() {
    function formatBitsPerSecond(speed){
        speed = speed / 1000000
        return speed
    }

    const [avgUp, setAvgUp] = useState(0);

    useEffect(() => {
        //hit the end point
        fetch('http://192.168.1.244:3001/YdAvgUp')
            .then(response =>  {
                //handle the response
                return response.json();
            })
            .then(data => {
                //set the prop
                setAvgUp(formatBitsPerSecond(data[0].avg).toFixed(2))
            });
    },[]);

    return(
        <h3>{avgUp}</h3>
    )

}
export default TFourAverageUp