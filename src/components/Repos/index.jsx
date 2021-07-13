import './styles.css';

export function Repos({ name }) {

  console.log('aqui tem o name', name)
  return (
    <div className='box-repos'>
      <h3>{name}</h3>
    </div>
  )
}
