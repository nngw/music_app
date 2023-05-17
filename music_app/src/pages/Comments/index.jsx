import React, { useState } from 'react'
import './style.css'

function Comments() {
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
        <label htmlFor="commentInput"> 
          <textarea 
            required
            id='commentInput'
            rows="3" cols="50" 
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

export default Comments
