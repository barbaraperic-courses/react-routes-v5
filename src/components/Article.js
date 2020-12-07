import React from 'react';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import useArticle from '../hooks/useArticle'
import useTeamsArticles from '../hooks/useTeamsArticles'
import Sidebar from './Sidebar'
import Loading from './Loading'

const Article = () => {
  const { teamId, articleId } = useParams()

  const {
    response: article,
    loading
  } = useArticle({ teamId, articleId })

  if(loading) {
    return null
  }

  return (
    <div className="panel">
      <article className='article'>
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  )
}

const Articles = () => {
  const { teamId } = useParams()
  const { path } = useRouteMatch()

  const {
    response: articles,
    loading
  } = useTeamsArticles(teamId)
  

  if (loading) {
    return <Loading />
  }

  return (
    <div className='container two-column'>
      <Sidebar 
        title="Articles"
        list={articles.map(article => article.title)}
      />
      <Switch>
        <Route path={`${path}/:articleId`}>
          <Article />
        </Route>
      </Switch>
    </div>
  )
}

export default Articles