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
    
    localStorage.clear()
  setUser(null)
  navigate('/')
  // window.location.replace("/")
		
	}

  return (
    <div className='navbar-container'>
      <div className='shop-name'>
        <h1 style={{marginBottom: "0px", marginTop: '5px', color: 'rgb(71, 41, 162)'}}>
        <img
            src="/images/640-analog-wristwatch-with-leather-strap.jpg"
            // src="/images/pexels-hemanth-k-m-11638635.jpg"
            width="50"
            className="rounded-circle"
            alt="logo"
            style={{marginTop: "0px", marginBottom: "5px"}}
            />
          Trasia Watches Store</h1>
      </div>
      <div className='icons'>
      {/* <Link to='/home'><BsShop className="icon"/></Link> */}
      <Link to={`/managedb`}><GiWatch className="icon"/></Link>
      <Link to={`/staffprofile`}><BsPersonCircle className="icon" alt=""/></Link>
      <Link to="" ><GoSignOut className="icon" onClick={handleLogOut}/></Link>
      </div>
    </div>
  );
}

export default NavBar
