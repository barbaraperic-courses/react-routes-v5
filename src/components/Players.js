import React from 'react'
import usePlayers from '../hooks/usePlayers'

const Players = () => {

  const {
    response: players,
    loading
  } = usePlayers()

  if (loading === true) {
    return <p>LOADING</p>
  }
  
  return (
    <div className="container two-column">
      <div>
        <h1 className="header">Players</h1>
        <ul className="sidebar-list">
          {players.map(player => (
            <li style={{fontWeight: 'normal'}} key={player.name}>
              <a href="/">
                {player.name}
              </a>
            </li>
          ))}
        </ul>
      </div >
      <div className="sidebar-instruction">Select a player</div>
    </div>
  )
}

export default Players