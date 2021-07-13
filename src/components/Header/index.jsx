import './styles.css';


export function Header({ data }) {
  return (
    <header className='header'>
      <div className='box-borde'>
        <div className='box-name'>
          <span className='title'>
            {data?.name}
          </span>
          <span className='sub-title'>
            {data?.company}
          </span>
        </div>
      </div>
    </header>
  )
}
