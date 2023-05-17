import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.css'

const NotFound = () => {
  const location = useLocation()
  return (
    <>
      <div className='notFound'>
        <h2>Page Not Found</h2>
      </div>

      <Link className='homepageLink' to="/">Go back to Home Page {'\n'} &rarr; </Link>
    </>
  )
}

export default NotFound
