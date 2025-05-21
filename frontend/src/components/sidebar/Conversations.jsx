import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {
  const { loading, conversations } = useGetConversations()
  return (
    <>
      {loading ? (
        <div className='h-full flex justify-center items-center'>
          <span className='loading loading-spinner loading-xl text-primary'></span>
        </div>
      ) : (
        <div className='py-2 flex flex-col overflow-auto'>
          {conversations.length > 0 &&
            conversations.map((conversation, index) => (
              <Conversation
                key={conversation._id}
                conversation={conversation}
                lastIdx={index === conversations.length - 1}
              />
            ))}
        </div>
      )}
    </>
  )
}

export default Conversations
