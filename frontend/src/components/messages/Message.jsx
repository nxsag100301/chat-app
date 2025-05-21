import { useAuthContext } from '../../hooks/useAuthContext'
import useConversation from '../../zustand/useConversation'

const Message = ({ message }) => {
  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const fromMe = authUser._id === message.senderId
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic
  const createdAt = new Date(message.createdAt).toLocaleString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='Tailwind CSS chat bubble component' src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble ${fromMe && 'text-white bg-blue-500'} `}>
        {message.message}
      </div>
      <div className='chat-footer opacity-50'>{createdAt}</div>
    </div>
  )
}

export default Message
