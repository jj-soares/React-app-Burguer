import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Order from './Pages/Order'


function Routes() {

    return (
        <Router>

            <Switch>

                <Route exact path='/' component={Home}/>
                
                <Route exact path='/order' component={Order}     />

            </Switch>


        </Router>
    )

}

export default Routes