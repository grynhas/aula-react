import React from 'react'
import './styles.css';


export function Header({ data }) {

  return (
    <header className='header'>
      <div className='box-borde'>
        <div className='box-name'>
          <text className='title'>
            {data?.name}
          </text>
          <text className='sub-title'>
            {data?.company}
          </text>
        </div>
      </div>
    </header>
  )
}
