import { Link } from "react-router-dom"
import { AiOutlineHome } from 'react-icons/ai'
import { GiWatch } from 'react-icons/gi'
import { BsPersonCircle } from 'react-icons/bs'

const NavBar = ({ user, setUser }) => {
	function handleLogOut() {
		// Delegate to the users-service
		// userService.logOut()
		// Update state will also cause a re-render
		setUser(null)
	}

  return (
    <div className='navbar-container'>
      <div className='instacat'>
        {/* <h1><AiOutlineHome/>Trasia Watch Store</h1> */}
      </div>
      <div className='icons'>
      <Link to='/'><AiOutlineHome style={{marginLeft: "10px"}} className="icon" size='50px'/></Link>
      {/* <Link to={`/createPost`}><img src="/images/newposticon.png" className="icon" alt=""/></Link> */}
      <Link to={`/managedb`}><GiWatch style={{marginLeft: "10px"}} className="icon" size='50px'/></Link>
      {/* <Link to={`/profile`}><img src={user.avatar} className="icon db profilePicture" alt=""/>{user.name}</Link> */}
      <Link to={`/staffprofile`}><BsPersonCircle style={{marginLeft: "10px"}} size='50px' className="icon db profilePicture" alt=""/></Link>
      <Link to="" className="icon" style={{marginRight: "10px"}} onClick={handleLogOut}>Log Out</Link>
      </div>
    </div>
  );
}

export default NavBar
