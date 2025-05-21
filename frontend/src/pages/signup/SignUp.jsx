import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = useSignUp()

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  if (loading) return <>Logging in...</>

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
              SignUp
              <span className='text-blue-500'> Chat App</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label className='label pt-2 pb-1'>
                  <span className='text-base label-text'>Fullname</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter fullname'
                  className='w-full input h-10 outline-none'
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className='label pt-2 pb-1'>
                  <span className='text-base label-text'>Username</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter username'
                  className='w-full input   h-10 outline-none'
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
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
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
              <div>
                <label className='label pt-2 pb-1'>
                  <span className='text-base label-text'>Confirm password</span>
                </label>
                <input
                  type='password'
                  placeholder='Enter confirm password'
                  className='w-full input   h-10 outline-none'
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </div>
              <GenderCheckbox
                onCheckboxChange={handleCheckboxChange}
                selectedGender={inputs.gender}
              />
              <Link
                to='/login'
                className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
              >
                Already have an account?
              </Link>
              <button className='btn btn-block btn-primary mt-2'>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default SignUp
