import React, {useState, useEffect} from 'react';


function NwStatTable() {
        const [nwStats, setNwStats] = useState([]);
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            fetch('http://192.168.1.244:3001')
              .then(response => {
                return response.json();
              })
                .then(data => {
                    setNwStats(data)
                    setIsLoading(false)
                });
        }, []);

        function formatBitsPerSecond(speed){
            speed = speed / 1000000
            return speed
        }


        return(
            <div>
                <h1 id='title'>Network Stats: 5155</h1>
                <h2 id='testCount'>Tests Run: {nwStats.length}</h2> 
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