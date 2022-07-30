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
      {/* <img src="../../../public/images/pexels-antony-trivet-9897010.jpg" alt=''/> */}
        <h1>Trasia Watch Store</h1>
      </div>
      <div className='icons'>
      <Link to='/home'><BsShop className="icon"/></Link>
      <Link to={`/managedb`}><GiWatch className="icon"/></Link>
      <Link to={`/staffprofile`}><BsPersonCircle className="icon" alt=""/></Link>
      <Link to="" ><GoSignOut className="icon" onClick={handleLogOut}/></Link>
      </div>
    </div>
  );
}

export default NavBar
