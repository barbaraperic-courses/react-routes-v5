import React from 'react';
import { Switch, Route, useParams, useRouteMatch, useLocation } from 'react-router-dom'
import slug from 'slug'
import useArticle from '../hooks/useArticle'
import useTeamsArticles from '../hooks/useTeamsArticles'
import Sidebar from './Sidebar'

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
    return <h1>Loading</h1>
  }

  
  // console.log(articleList.map(article => article.title))
  
  // const articleTitle = articleList.find(article => slug(article.id) === articleId)
  // console.log('articleTitle', articleTitle)

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