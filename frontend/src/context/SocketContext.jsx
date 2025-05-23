import { useState, useEffect, createContext } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import io from 'socket.io-client'

// eslint-disable-next-line react-refresh/only-export-components
export const SocketContext = createContext()

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const { authUser } = useAuthContext()
  useEffect(() => {
    if (authUser) {
      // const socket = io('http://localhost:5000', {
      //   auth: {
      //     userId: authUser._id
      //   }
      // })
      const socket = io('https://nxsag-chat-app.onrender.com', {
        query: {
          userId: authUser._id
        }
      })
      setSocket(socket)
      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users)
      })
      return () => socket.close()
    } else {
      if (socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, [authUser])
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  )
}
