import { Switch, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'

const Router = () => (
    <Switch>
        <Route path = "/dashboard" component = { Dashboard } />
    </Switch>
)

export default Router