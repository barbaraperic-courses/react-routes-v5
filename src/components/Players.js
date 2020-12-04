import React from 'react'
import usePlayers from '../hooks/usePlayers'

const Players = () => {

  const {
    response: players,
    loading
  } = usePlayers()

  console.log(usePlayers())
  if (loading === true) {
    return <p>LOADING</p>
  }
  
  return (
    <div>
      {players.map(player => (
        <h2>{player.name}</h2>
      ))}
    </div>
  )
}

export default Players