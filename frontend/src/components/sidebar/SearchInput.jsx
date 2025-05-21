import { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations()
  const handleSubmitSearch = (event) => {
    event.preventDefault()
    if (!search) return
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long')
    }
    const conversation = conversations.find((item) =>
      item.fullName.toLowerCase().includes(search.trim().toLowerCase())
    )
    if (conversation) {
      setSelectedConversation(conversation)
      setSearch('')
    } else {
      toast.error('No such user found!')
    }
  }
  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmitSearch}>
      <input
        type='text'
        placeholder='Search...'
        className='input input-bordered rounded-3xl outline-none border-none'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        type='submit'
        className='btn btn-circle bg-sky-500 border-sky-500 text-white'
      >
        <IoSearchOutline />
      </button>
    </form>
  )
}

export default SearchInput
