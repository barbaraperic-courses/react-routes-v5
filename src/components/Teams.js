import React from 'react'
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'
import useTeamNames from '../hooks/useTeamNames'
import useTeam from '../hooks/useTeam'
import '../index.css'
import Sidebar from './Sidebar'
import TeamLogo from './TeamLogo'


const Team = () => {
  const params = useParams()
  const team = params.team
  const { 
    response,
    loading
  } = useTeam(team)

  if (loading) {
    return <div>LOADING</div>
  }
  return (
    <div className="panel">
      <TeamLogo id={response.id}/>
      <h1 className="medium-header">{response.id}</h1>
      <ul className="info-list row" style={{ width: '100%'}}> 
        <li>Est. <div>{response.established}</div></li>
        <li>Manager <div>{response.manager}</div></li>
        <li>Coach <div>{response.coach}</div></li>
      </ul>
      <Link to={`/${response.id}`} className="center btn-main">{response.id} team page</Link>
    </div>
  )
}

const Teams = () => {
  const { url } = useRouteMatch()

  const {
    response: teams,
    loading
  } = useTeamNames()

  if (loading) {
    return <h2>LOADING</h2>
  }

  return (
    <div className="container two-column">
      <Sidebar
        header="Teams"
        list={teams}
      />
    <Switch>
      <Route path={`${url}/:team`}>
        <Team />
      </Route>
      <Route path="*">
        <div>Select a team</div>
      </Route>
    </Switch>
    </div>
  )
}

export default Teams