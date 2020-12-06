import React from 'react';
import { useParams, useRouteMatch, useLocation } from 'react-router-dom'
import slug from 'slug'
import useArticle from '../hooks/useArticle'
import useTeamsArticles from '../hooks/useTeamsArticles'
import Sidebar from './Sidebar'

function useArticlePageData(teamId, articleId) {
  const {
    response: articleList,
    loading: teamsArticleLoading
  } = useTeamsArticles(teamId)

  const {
    response: article,
    loading: articleLoading
  } = useArticle({teamId, articleId})

  return {
    article,
    articleList,
    loading: teamsArticleLoading || articleLoading
  }
}

const Article = () => {
  // const { teamId, articleId } = useParams()
  const params = useParams()
  const url = useRouteMatch()
  // const location = useLocation()
  console.log('params',params)
  console.log('url', url)
  // console.log('location',location)

  // const path = useRouteMatch()
  // const location = useLocation()
  // console.log(useArticle(params.teamId))
  // console.log(path)

  // console.log('path',path)
  
  // const { 
  //   article,
  //   articleList,
  //   loading
  // } = useArticlePageData(teamId, articleId)

  // if (loading) {
  //   return <h1>Loading</h1>
  // }
  
  // console.log(articleList.map(article => article.title))
  
  // const articleTitle = articleList.find(article => slug(article.id) === articleId)
  // console.log('articleTitle', articleTitle)

  return (
    <div>
      {/* <Sidebar 
        title="Articles"
        list={articleList.map(article => article.title)}
      />
      <h1>{article.title}</h1>
      <p>{article.body}</p> */}
    </div>
  )
}

export default Article