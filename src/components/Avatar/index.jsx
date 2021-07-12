import React from 'react'
import './styles.css';

export function Avatar({ data }) {
  return (
    <img className="avatar" src={data?.avatar_url} alt="avatar" />
  )
}
