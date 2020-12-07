import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import '../index.css'
import Home from './Home'
import Players from './Players'
import Teams from './Teams'
import TeamPage from './TeamPage'
import Article from './Article'

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
  },
  {
    path: '/:teamId',
    exact: true,
    component: TeamPage,
  },
  {
    path: '/:teamId/articles',
    component: Article,
  }
]

export default function App () {
  return (
    <Router>
      <div id="root">
        <ul className="container navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <div className="nav-links">
            <li>
              <Link to="/players">Player</Link>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
          </div>
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
      </div>
    </Router>
  )
}