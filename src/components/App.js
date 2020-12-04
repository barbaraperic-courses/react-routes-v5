import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const Home = () => <h1>Hash History Basketball League</h1>
const Players = () => <h1>Players</h1>
const Teams = () => <h1>Teams</h1>

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/players',
    component: Players,
  },
  {
    path: '/teams',
    component: Teams,
  }
]

export default function App () {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/players">Player</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
      </ul>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
          >
            <route.component />
          </Route>
        ))}
      </Switch>
    </Router>
  )
}