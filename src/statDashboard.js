import React, {useState, useEffect} from 'react';
import GetNavBar from './NwNavBar'
import HistoricalLine from './historicalLine'
import HistoricalPingLine from './historicalPingLine'
// import AverageDownLabel from './StatsComponents/AverageDownLabel'
// import AveragePingLabel from './StatsComponents/AveragePingLabel'
// import AverageUpLabel from './StatsComponents/AverageUpLabel'
// import TFourAvgDown from './StatsComponents/TFourAverageDown'
// import TFourAvgUp from './StatsComponents/TFourAverageUp'
// import TFourAvgPing from './StatsComponents/TFourAveragePing'

import './styles/statsDashHeaderStyle.css'

function StatDashboard(){
    function formatBitsPerSecond(speed){
        speed = speed / 1000000
        return speed
    }
    //func comp for the colored down label
    const TFourAvgDown = (atDwn, tfDwn) => {
        if(atDwn < tfDwn){
            return(
                <td style={{color:'green'}}>{tfDwn} (+{(tfDwn/atDwn).toFixed(2)}%) </td>
            );
        }else{
            return(
                <td style={{color:'red'}}>{tfDwn} (-{(atDwn/tfDwn).toFixed(2)}%) </td>
            );
        }
    }
    //func comp for the colored up label 
    const TFourAvgUp = (atUp, tfUp) => {
        if(atUp < tfUp){
            return(
                <td style={{color:'green'}}>{tfUp} (+{(tfUp/atUp).toFixed(2)}%)  </td>
            );
        }else{
            return(
                <td style={{color:'red'}}>{tfUp} (-{(atUp/tfUp).toFixed(2)}%) </td>
            );
        }
    }
    //func comp for the colored ping label 
    const TFourAvgPing = (atPing, tfPing) => {
        if(atPing > tfPing){
            return(
                <td style={{color:'green'}}>{tfPing} (+{(atPing/tfPing).toFixed(2)}%) </td>
            );
        }else{
            return(
                <td style={{color:'red'}}>{tfPing} (-{(tfPing/atPing).toFixed(2)}%) </td>
            );
        }
    }

    //average down all time
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
    //average up all time
    const [avgUp, setAvgUp] = useState(0);
    useEffect(() => {
        //hit the end point
        fetch('http://192.168.1.244:3001/AvgUp')
            .then(response =>  {
                //handle the response
                return response.json();
            })
            .then(data => {
                //set the prop
                setAvgUp(formatBitsPerSecond(parseFloat(data[0].avg)).toFixed(2))
            });
    },[]);
    //average ping all time
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
    //average down last 24
    const [avgTFDown, setAvgTFDown] = useState(0);
    useEffect(() => {
        //hit the end point
        fetch('http://192.168.1.244:3001/YdAvgDown')
            .then(response =>  {
                //handle the response
                return response.json();
            })
            .then(data => {
                //set the prop
                setAvgTFDown(formatBitsPerSecond(data[0].avg).toFixed(2))
            });
    },[]);
    //average up last 24
    const [avgTFUp, setAvgTFUp] = useState(0);

    useEffect(() => {
        //hit the end point
        fetch('http://192.168.1.244:3001/YdAvgUp')
            .then(response =>  {
                //handle the response
                return response.json();
            })
            .then(data => {
                //set the prop
                setAvgTFUp(formatBitsPerSecond(parseFloat(data[0].avg)).toFixed(2))
            });
    },[]);
    //Average ping last 24
    const [avgTFPing, setAvgTFPing] = useState(0);

    useEffect(() => {
        //hit the end point
        fetch('http://192.168.1.244:3001/YdAvgPing')
            .then(response =>  {
                //handle the response
                return response.json();
            })
            .then(data => {
                //set the prop
                setAvgTFPing(parseFloat(data[0].avg).toFixed(2))
            });
    },[]);

        return(
        <div style={{backgroundColor:"#181a1b"}}>
            {GetNavBar()}

            <table id='AvgVtFourTable'>
            <tbody>
                    <tr>
                        <th> </th>
                        <th>Down (Mbps)</th>
                        <th>Up (Mbps)</th>
                        <th>Ping(ms)</th>
                    </tr>
 
                    <tr>
                        <td id="rowCap">All Time Average </td>
                        <td>{avgDown}</td>
                        <td>{avgUp}</td>
                        <td>{avgPing}</td>
                    </tr>

                    <tr>
                        <td id='rowCap'>Average Over Last 24hrs</td>
                        {TFourAvgDown(avgDown, avgTFDown)}
                        {TFourAvgUp(avgUp, avgTFUp)}
                        {TFourAvgPing(avgPing, avgTFPing)}
                    </tr>

                </tbody>
            </table>
            <div id='Chart'><HistoricalLine/></div>
            <div><HistoricalPingLine/></div>
        </div>
        );
    
}
export default StatDashboard;
