import { useEffect, useState } from 'react'
import './App.css';
import { Header } from './components/Header'
import { Avatar } from './components/Avatar'
import { Information } from './components/Information'
import { Repos } from './components/Repos'

function App() {
  const [dados, setDados] = useState()
  const [repos, setRepos] = useState([])
  const github = "celsojuniodev"

  useEffect(() => {
    fetch(`https://api.github.com/users/${github}`)
      .then(response => response.json())
      .then(data => setDados(data))
  }, [])

  useEffect(() => {
    fetch(`https://api.github.com/users/${github}/repos`)
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])
  console.log('aqui', repos)
  return (
    <>
      <Header data={dados} />
      <div className='main'>
        <Information number={dados?.followers} type='followers' />
        <Avatar data={dados} />
        <Information number={dados?.following} type='following' />
      </div>
      <div className='repo'>
        {repos.map(repo => <Repos name={repo?.name} />)}
      </div>
    </>
  );

}

export default App;
