import { BiLogOut } from 'react-icons/bi'
import useLogOut from '../../hooks/useLogOut'

const LogoutButton = () => {
  const { logout } = useLogOut()
  return (
    <div className='mt-auto'>
      <BiLogOut className='w-6 h-6 cursor-pointer' onClick={logout} />
    </div>
  )
}

export default LogoutButton
