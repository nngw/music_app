import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Form.css'

function Form() {
  const [comment, setComment] = useState("");

  const [commentsArray, setComments] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments(commentsArray => [...commentsArray, comment])
    setComment('')
  }

  return (
    <>
      <h3>Comment</h3>
      <h5>Let us know what you think about Bring Me the Horizon. Type your comment below</h5>
      <form onSubmit={handleSubmit}>
        <label> 
          <input 
            required
            type="text" 
            value={comment}
            onChange={(e) => setComment(e.target.value)}/>
        </label>
        <input type="submit" />
      </form>
      <br />

      <h3>Your Comments:</h3>
      <ul>
        {commentsArray.map((c, idx) => (
          <li key = {idx}>Comment {idx+1}: {c} </li> 
        ))}
      </ul>
    </>
  )
}

export default Form
