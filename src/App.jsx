import { useEffect, useState } from 'react'
import './App.css';
import { Header } from './components/Header'
import { Avatar } from './components/Avatar'
import { Information } from './components/Information'
import { Repos } from './components/Repos'

function App() {
  const [dados, setDados] = useState()
  useEffect(() => {
    fetch('https://api.github.com/users/celsojuniodev')
      .then(response => response.json())
      .then(data => setDados(data))
  }, [])
  console.log('aqui', dados)
  return (
    <>
      <Header data={dados} />
      <div className='main'>
        <Information number={dados?.followers} type='followers' />
        <Avatar data={dados} />
        <Information number={dados?.following} type='following' />
      </div>
      <Repos url={dados?.repos_url} />
    </>
  );

}

export default App;
