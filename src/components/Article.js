import React from 'react';
import { useParams } from 'react-router-dom'
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
  const { teamId, articleId } = useParams()
  console.log('team',useTeamsArticles(teamId))

  const { 
    article,
    articleList,
    loading
  } = useArticlePageData(teamId, articleId)

  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <div>
      <Sidebar 
        title="Articles"
        list={articleList.map(article => article.title)}
      />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  )
}

export default Article