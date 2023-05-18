import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { useAuth } from '../../contexts'

import './style.css'

const Home = () => {
  const [artistDetails, setArtistDetails] = useState([])

  useEffect(() => {
    try {
      async function getArtistDetails () {
        const res = await axios.get('https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=BringMethehorizon&api_key=20e0ac2d870553ac17505122660cd87b&format=json')
        
        // const res = await axios.get(process.env.REACT_APP_KEY)

        setArtistDetails(res.data)
       
      }
      // getArtistDetails()
    } catch (error) {
      console.log(error)
    }

  },[])

  let user = useAuth()
  user = user.user.toUpperCase()

  return (
    <>
      <h2>
        Welcome <span className='redText '>{user}</span> to the BMtH Fan Page 
      </h2>
      <div>
        <img className="titlecard" src="https://dynamicmedia.livenationinternational.com/Media/w/q/q/6b44c664-089b-45f2-979c-1dd22f7625ac.png" alt="bring me the horizon profile picture" />
      </div>

      <h1>Bring Me the Horizon</h1>
      <h2>Genre: Rock</h2>
      <h3>Intro:</h3>
      {/* <p>{artistDetails.artist.bio.summary}</p> */}
      <p>Bring Me the Horizon (often abbreviated as BMTH) are a British rock band, formed in Sheffield in 2004. The group currently consists of lead vocalist Oliver Sykes, guitarist Lee Malia, bassist Matt Kean, drummer Matt Nicholls and keyboardist Jordan Fish. They are signed to RCA Records globally and Columbia Records exclusively in the United States.</p>
    </>
  )
}

export default Home
