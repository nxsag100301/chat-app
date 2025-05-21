import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loading, login } = useLogin()
  const handleSubmitLogin = async (event) => {
    event.preventDefault()
    await login(username, password)
  }
  return (
    <>
      {loading ? (
        <span className='loading loading-spinner loading-sm text-primary'></span>
      ) : (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div
            className='w-full p-6 rounded-lg shadow-md bg-gray-400/0 bg-clip-padding
         backdrop-filter backdrop-blur-lg'
          >
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
              Login
              <span className='text-blue-500'> Chat App</span>
            </h1>
            <form onSubmit={handleSubmitLogin}>
              <div>
                <label className='label pt-2 pb-1'>
                  <span className='text-base label-text'>Username</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter username'
                  className='w-full input h-10 outline-none'
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div>
                <label className='label pt-2 pb-1'>
                  <span className='text-base label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Enter password'
                  className='w-full input h-10 outline-none'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <Link
                to='/signup'
                className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
              >
                {`Don't`} have an account?
              </Link>
              <button className='btn btn-block btn-primary mt-2'>Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Login
