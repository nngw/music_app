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

    let isLiked = "Like"
    
    const handleClick = (e) => {
        setClick(prevClick => !prevClick)
        if(click){
          e.target.style.backgroundColor = 'purple'
        } else {
            e.target.style.backgroundColor = 'green'
        }
    
    }


    return(
        <button onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} >{isLiked}</button>
    )
    
}

export default LikeButton
