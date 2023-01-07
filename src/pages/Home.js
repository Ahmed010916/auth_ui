import React from 'react'
import Nav from '../components/Nav'
import { useSelector } from 'react-redux'

const Home = () => {

  const {loggedin} = useSelector(state=>state.auth)
  console.log(loggedin);

  return (
    <div className=''>
      <Nav />
    </div>
  )
}

export default Home