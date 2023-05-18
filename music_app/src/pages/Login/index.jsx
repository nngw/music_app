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

  const colourList = {
    col1: '#010101',
    col2: '#303030',
    col3: '#444444',
    col4: '#565656',
    col5: '#AAAAAA',
  }
  
  const changeBackgroundColour = () => {
    
    let colourCount = 0

    useEffect(() => {
      const timer = setInterval(() => {
        let currentColour = Object.entries(colourList)[colourCount][1]

        document.body.style.background = currentColour
        if(colourCount < Object.keys(colourList).length-1){
          colourCount += 1
        } else {
          colourCount = 0
        }
        
      }, (5000))
    },[])

  }
  changeBackgroundColour()


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
