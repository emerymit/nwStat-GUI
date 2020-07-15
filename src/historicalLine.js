import React, {useState, useEffect}  from 'react'
import { LineChart, Line, ResponsiveContainer, CartesianGrid, YAxis, XAxis, Legend, Tooltip } from 'recharts';

function HistoricalLine(){
    
    function formatBitsPerSecond(speed){
        speed = speed / 1000000
        return speed
    }

    const [nwHistorical, setNwHistorical] = useState([]);
    useEffect(() => {
        fetch('http://192.168.1.244:3001/GetHistoricalData')
          .then(response => {
            return response.json();
          })
            .then(data => {
                setNwHistorical(data)
            });
    }, []);
    const data = [];

    // Intl.DateTimeFormat("en-US", {
    //     year:"numeric",
    //     month:"long",
    //     day:"2-digit",
    //     minute:"2-digit",
    //     hour:"2-digit",
    //     weekday:"short",
    //     timeZoneName:"short",
    // }).format(new Date(stat.time))

    console.log(nwHistorical)
    nwHistorical.map((stat, index) => (
        data.push({time: Intl.DateTimeFormat("en-us", { month:"numeric", day:"2-digit",}).format(new Date(stat.days)), down: formatBitsPerSecond(stat.download), up: formatBitsPerSecond(stat.upload), ping: stat.ping})
    ));
    
    function renderColorfulLegendText(value, entry) {
      const { color } = entry;
      
      return <span style={{ color }}>{value}</span>;
    }

    return(
        <ResponsiveContainer id='Chart' width='90%' aspect={4.0/1.0}>
          <LineChart data={data}>
            <Line strokeWidth={4} type="monotone" yAxisId='left' dataKey="down" stroke="#cf5e73" />
            <Line strokeWidth={4} type="monotone" yAxisId='right' dataKey="up" stroke="#75c9fa" />
            {/* <Line type="monotone" dataKey="ping" stroke="#0000FF" /> */}
            <CartesianGrid stroke="#ccc" />
            <XAxis id='axisLabel' dataKey="time"/>
            <YAxis id='axisLabel' yAxisId='left' domain={[50, 130]} />
            <YAxis id='axisLabel' yAxisId='right' domain={[5, 15]} orientation="right" />
            <Tooltip wrapperStyle={{ backgroundColor: "red" }} />
            <Legend formatter={renderColorfulLegendText}/>
          </LineChart>
        </ResponsiveContainer>
    );
}

export default HistoricalLine
