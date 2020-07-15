import React, {useState, useEffect}  from 'react'
import { LineChart, Line, ResponsiveContainer, CartesianGrid, YAxis, XAxis, Legend, Tooltip } from 'recharts';

function HistoricalPingLine(){
    
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

    console.log(nwHistorical)
    nwHistorical.map((stat, index) => (
        data.push({time: Intl.DateTimeFormat("en-us", { month:"numeric", day:"2-digit",}).format(new Date(stat.days)), down: stat.download, up: stat.upload, ping: stat.ping})
    ));
    
    function renderColorfulLegendText(value, entry) {
      const { color } = entry;
      
      return <span style={{ color }}>{value}</span>;
    }

    return(
        <ResponsiveContainer id='Chart' width='90%' aspect={4.0/1.0}>
          <LineChart data={data}>
            {/* <Line type="monotone" yAxisId='left' dataKey="down" stroke="#FF0000" />
            <Line type="monotone" yAxisId='right' dataKey="up" stroke="#0000FF" /> */}
            <Line strokeWidth={4} type="monotone" dataKey="ping" stroke="#d5fc79" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="time"/>
            {/* <YAxis yAxisId='left' domain={[50, 130]} />
            <YAxis yAxisId='right' domain={[5, 15]} orientation="right" /> */}
            <YAxis />
            <Tooltip wrapperStyle={{ backgroundColor: "red" }} />
            <Legend formatter={renderColorfulLegendText}/>
          </LineChart>
        </ResponsiveContainer>
    );
}

export default HistoricalPingLine
