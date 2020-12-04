import React from 'react';
import '../index.css'
import TeamLogo from './TeamLogo'

const ids = ['bulls', 'foxes', 'hedgehogs', 'koalas', 'lemurs']

const Home = () => {
  return (
    <div className="container">
      <h1 className="large-header">Hash History Basketball League</h1>
      <h3 className="header text-center">Select a team</h3>
      <div className="home-grid">
        {ids.map(id => (
          <a href="/" key={id}>
            <TeamLogo
              id={id} 
            />
          </a>
        ))}
      </div>
    </div>
  )        
}

export default Home