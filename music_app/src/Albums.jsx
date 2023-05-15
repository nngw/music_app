import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Albums.css'

function Album() {
  const [likes, setCount] = useState(0)
  const handleMouseEnter = (e) => {
    e.target.style.color = 'red'
    // e.target.style.boxShadow = '10rem'
  }

  const handleMouseLeave = (e) => {
    e.target.style.color = 'white'
  }
  const [sepClicked, countSepClick] = useState(0)
  const likeSepiternalClicked = (e) => {
    if(sepClicked === 0){
      e.target.style.backgroundColor = 'green'
      countSepClick(sepClicked+1)
    } else {
      e.target.style.backgroundColor = 'purple'
      countSepClick(sepClicked-1)
    }
  }

  const [spiritClicked, countSpiritClick] = useState(0)
  const likeSpiritClicked = (e) => {
    if(spiritClicked === 0){
      e.target.style.backgroundColor = 'green'
      countSpiritClick(spiritClicked+1)
    } else {
      e.target.style.backgroundColor = 'purple'
      countSpiritClick(spiritClicked-1)
    }
  }

  return (
    <>
      <h3>Albums</h3>
      <ul>
        <li className='liContainer'>
          <div className='flexContainer'>
            <button
              onMouseEnter = {handleMouseEnter}
              onMouseLeave = {handleMouseLeave}
              onClick={likeSepiternalClicked}
            >Like</button>
            <img className="coverart" src="https://upload.wikimedia.org/wikipedia/en/b/bb/BMTH_Sempiternal.png" alt="sepiternal" />
            <div className='infoContainer'>
              <h4>Album title: Sepriternal</h4>
              <h4>Rlease year: 2013</h4>
            </div>
            {/* <h4 className='likeCount'>Likes: {likes}</h4> */}
          </div>
        </li>
        <li className='liContainer'>


          <div className='flexContainer'>
            <button
              onMouseEnter = {handleMouseEnter}
              onMouseLeave = {handleMouseLeave}
              onClick={likeSpiritClicked}
            >Like</button>
            <img className="coverart" src="https://m.media-amazon.com/images/I/516HOT7Vj3L._AC_SL1000_.jpg" alt="That's The Spirit" />
            <div className='infoContainer'>
              <h4>Album title: That's The Spirit</h4>
              <h4>Rlease year: 2015</h4>
            </div>
            {/* <h4 className='likeCount'>Likes: {likes}</h4> */}
          </div>
        </li>
      </ul>
    </>
  )
}

export default Album
