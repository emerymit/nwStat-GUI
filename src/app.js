import React from 'react';
import ReactDOM from 'react-dom'
import HomeScreen from './homeScreen'
import StatDashboard from './statDashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App(){
    return(

        <main>
            <Switch>
                <Route path="/" component={HomeScreen} exact />
                <Route path="/StatisticsDashboard" component={StatDashboard} />
                <Route component={Error} />
            </Switch>
        </main>


    );

}
export default App