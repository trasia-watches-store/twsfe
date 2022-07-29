import { Link, useNavigate } from "react-router-dom"
import { AiOutlineHome } from 'react-icons/ai'
import { BsShop } from 'react-icons/bs'
import { GiWatch } from 'react-icons/gi'
import { BsPersonCircle } from 'react-icons/bs'
import { GoSignOut } from 'react-icons/go'
import cookie from 'react-cookies'
import axios from "axios"
import { USER_URL } from "../../constants";
import './NavBar.css'

const NavBar = ({ user, setUser }) => {
  let navigate = useNavigate()

	async function handleLogOut(evt) {
    evt.preventDefault();
    // axios.post(`${USER_URL}logout/`, {
    //   headers: {
    //     'Authorization': `Token ${localStorage.getItem('token')}`
    //   }
    // }).then((response) => {
    //   // console.log(response)
    //   localStorage.clear()
		// setUser(null)}
    // )
    
    localStorage.clear()
  setUser(null)
  navigate('/')
  // window.location.replace("/")
		
	}

  return (
    <div className='navbar-container'>
      <div className='instacat'>
        <h1><AiOutlineHome/>Trasia Watch Store</h1>
      </div>
      <div className='icons'>
      <Link to='/home'><BsShop style={{marginLeft: "10px"}} className="icon" size='50px'/></Link>
      <Link to={`/managedb`}><GiWatch style={{marginLeft: "10px"}} className="icon" size='50px'/></Link>
      <Link to={`/staffprofile`}><BsPersonCircle style={{marginLeft: "10px"}} size='50px' className="icon db profilePicture" alt=""/></Link>
      <Link to="" className="icon" style={{marginRight: "10px"}} onClick={handleLogOut}><GoSignOut style={{marginLeft: "20px"}} className="icon" size='50px'/></Link>
      </div>
    </div>
  );
}

export default NavBar
