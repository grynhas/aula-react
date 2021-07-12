import React from 'react'
import './styles.css';

export function Information({ number, type }) {
  return (
    <div className="info">
      <p>
        {type}
      </p>
      <span>
        {number}
      </span>
    </div>
  )
}
