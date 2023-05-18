import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'
import './style.css'

const Login = () => {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef()
  const goTo = useNavigate()
  const { setUser } = useAuth()

  useEffect(() =>{
    inputRef.current.focus()
  },[])

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(inputValue)
    goTo('/')
  }


  return (
    <>
      <h1>Welcome to the <span className='redText'>BMtH</span> fan page</h1>
      <h2 className='textCenter'>Type your name below to see our exciting content</h2>
      <form className='itemAlign'
        onSubmit={handleSubmit}
      >
        <label htmlFor="userName" className='mr10 textCenter'></label>
        <input 
          id="username" 
          className='mb20 p10' 
          type="text"
          placeholder='Type your name'
          autoComplete='off'
          value={inputValue}
          onChange={handleInput}
          ref={inputRef}
        />
        <input 
          type="submit" 
          className='p10 btn-red' 
        />
      </form>
    </>
  )
}

export default Login
