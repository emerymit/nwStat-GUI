import React, {useState, useEffect} from 'react';


function NwStatTable() {
        require('react-dom');
        window.React2 = require('react');
        console.log(window.React1 === window.React2);
        const [nwStats, setNwStats] = useState([]);
        const [isLoading, setIsLoading] = useState(true)
        const [nwStatCount, setNwStatCount] = useState(0);

        useEffect(() => {
            fetch('http://192.168.1.244:3001/GetAll')
              .then(response => {
                return response.json();
              })
                .then(data => {
                    setNwStats(data)
                    setIsLoading(false)
                });
        }, []);

        useEffect(() => {
            fetch('http://192.168.1.244:3001/GetStatCount')
              .then(response => {
                return response.json();
              })
                .then(data => {
                    setNwStatCount(data[0].count)
                    console.log(nwStatCount)
                });
        }, []);

        function formatBitsPerSecond(speed){
            speed = speed / 1000000
            return speed
        }


        return(
            <div>
                <h2 id='title'>Raw Test Results</h2>
                <h4 id='testCount'>Showing Last 7 Days Of Data, 336 rows of {nwStatCount}</h4> 
                <table id='masterstats'>
                    <tbody>
                        <tr>
                            <th>Server Location</th>
                            <th>Ping(ms)</th>
                            <th>Down (Mbps)</th>
                            <th>Up (Mbps)</th>
                            <th>Time</th>
                        </tr>
                        {isLoading ? '' : nwStats.map((stat, index) => (
                            <tr key={stat.id}>
                            <td>{stat.serverloc}</td>
                            <td>{stat.ping}</td>
                            <td>{formatBitsPerSecond(stat.download)}</td>
                            <td>{formatBitsPerSecond(stat.upload)}</td>
                            <td>{Intl.DateTimeFormat("en-US", {
                                year:"numeric",
                                month:"long",
                                day:"2-digit",
                                minute:"2-digit",
                                hour:"2-digit",
                                weekday:"short",
                                timeZoneName:"short",
                            }).format(new Date(stat.time))}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        );

    }


export default NwStatTable //always export