import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const [message, setMessage] = useState('')
  const { loading, sendMessage } = useSendMessage()
  const handleSubmitSendMessage = async (event) => {
    event.preventDefault()
    if (!message) return
    await sendMessage(message.trim())
    setMessage('')
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmitSendMessage}>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700
        border-gray-600 text-white outline-none'
          placeholder='Send a message'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        {loading ? (
          <span className='loading loading-spinner text-primary absolute inset-y-0 end-0 flex items-center pe-3 right-2'></span>
        ) : (
          <button className='absolute inset-y-0 end-0 flex items-center pe-3'>
            <BsSend className='cursor-pointer' />
          </button>
        )}
      </div>
    </form>
  )
}

export default MessageInput
