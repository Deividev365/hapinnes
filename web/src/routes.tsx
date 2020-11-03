import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanageMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/createOrphanage';
function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>
            <Route path="/app" component={OrphanagesMap} />
            <Route path="/Orphanages/:id" component={Orphanage} />
            <Route path="/Orphanage/create" component={CreateOrphanage} />
        </BrowserRouter>
    )
}

export default Routes;