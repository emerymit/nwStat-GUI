import React from 'react'
import './styles/tableStyle.css'
import NwStatTable from './nwStatTable'
import GetNavBar from './NwNavBar'
class HomeScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
                
                {GetNavBar()}
                <NwStatTable/>
            
            
            </div>
        
        
        
        );
    }
}

export default HomeScreen //always export