import { useState } from 'react'



function LikeButton () {

    const handleMouseEnter = (e) => {
        e.target.style.color = 'red'
        // e.target.style.boxShadow = '10rem'
      }
    
      const handleMouseLeave = (e) => {
        e.target.style.color = 'white'
      }

    const [click, setClick] = useState(false)

    const handleClick = (e) => {
      if(click){
          e.target.style.backgroundColor = 'purple'
          // countSepClick(sepClicked+1)
        } else {
            e.target.style.backgroundColor = 'green'
            // countSepClick(sepClicked-1)
        }
    setClick(prevClick => !prevClick)
    }

    return(
        <button onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} >Like</button>
    )
}

export default LikeButton
