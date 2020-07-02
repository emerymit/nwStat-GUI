import React from 'react'
import GetNavBar from './NwNavBar'

class StatDashboard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
                {GetNavBar()}
                <h1>We made it</h1>
            </div>
        );
    }
}

export default StatDashboard;