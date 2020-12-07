import React from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import slug from 'slug'
import useTeam from '../hooks/useTeam'
import useTeamArticles from '../hooks/useTeamsArticles'
import TeamLogo from './TeamLogo'
import Loading from './Loading'

function useTeamPageData(teamId) {
  const { 
    response: team,
    loading: loadingTeam
  } = useTeam(teamId)

  const {
    response: articles,
    loading: loadingArticle
  } = useTeamArticles(teamId)

  return {
    team,
    articles,
    loading: loadingTeam || loadingArticle
  }
}

const TeamsPage = () => {
  const { teamId } = useParams()
  const { url } = useRouteMatch()
  
  const {
    team,
    articles,
    loading
  } = useTeamPageData(teamId)


  if(loading) {
    return <Loading />
  }

  return (
    <div className="panel">
      <TeamLogo id={team.id}/>
      <h1 className="medium-header">{team.id}</h1>
      <h4>Championships</h4>
      <ul className="championships">
        {team.championships.map(year => (
          <li key={year}>{year}</li>
        ))}
      </ul>
      <ul className="info-list row" style={{ width: '100%' }}>
        <li>Est. <div>{team.established}</div></li>
        <li>Manager <div>{team.manager}</div></li>
        <li>Coach <div>{team.coach}</div></li>
        <li>Record <div>{team.wins}-{team.losses}</div></li>
      </ul>
      <h1 className="medium-header">Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`${url}/articles/${slug(article.title)}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamsPage