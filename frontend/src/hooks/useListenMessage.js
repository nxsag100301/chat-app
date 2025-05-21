import { useEffect } from 'react'
import { useSocketContext } from './useSocketContext'
import useConversation from '../zustand/useConversation'

const useListenMessage = () => {
  const { socket } = useSocketContext()
  const { messages, setMessages, selectedConversation } = useConversation()
  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      if (selectedConversation._id !== newMessage.senderId) {
        return
      } else {
        setMessages([...messages, newMessage])
      }
    })
    return () => socket?.off('newMessage')
  }, [socket, messages, setMessages, selectedConversation])
}

export default useListenMessage
