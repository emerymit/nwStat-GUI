import React from 'react'
import GetNavBar from './NwNavBar'
import AverageDownLabel from './StatsComponents/AverageDownLabel'
import AveragePingLabel from './StatsComponents/AveragePingLabel'
import AverageUpLabel from './StatsComponents/AverageUpLabel'
import TFourAvgDown from './StatsComponents/TFourAverageDown'
import TFourAvgUp from './StatsComponents/TFourAverageUp'
import TFourAvgPing from './StatsComponents/TFourAveragePing'

import './styles/statsDashHeaderStyle.css'

class StatDashboard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
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
                        <td><AverageDownLabel/></td>
                        <td><AverageUpLabel/></td>
                        <td><AveragePingLabel/></td>
                    </tr>

                    <tr>
                        <td id='rowCap'>Average Over Last 24hrs</td>
                        <td><TFourAvgDown/></td>
                        <td><TFourAvgUp/></td>
                        <td><TFourAvgPing/></td>
                    </tr>

                </tbody>
            </table>


            
        </div>
        );
    }
}

export default StatDashboard;
