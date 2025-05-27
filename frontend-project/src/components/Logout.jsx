import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
  return (
    <button onClick={handleLogout} className='bg-blue-400 rounded shadow-sm text-sm text-black p-2 cursor-pointer'>
        Logout
    </button>
  )
}

export default Logout