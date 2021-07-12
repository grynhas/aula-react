import React, { useEffect, useState } from 'react'
import './styles.css';

export function Repos({ url }) {
  const [repos, setRepos] = useState({})
  useEffect(() => {
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])

  return (
    <div className='box-repos'>
      <div className='box-repos-test'>
        <ul>
        </ul>
      </div>
    </div>
  )
}
