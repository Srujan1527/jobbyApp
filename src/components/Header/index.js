import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {RiLogoutBoxRFill} from 'react-icons/ri'
import {BsFillBagFill} from 'react-icons/bs'

const Header = props => {
  const {history} = props

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <div className="header-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="header-image"
        />
        <div className="header-route-container">
          <Link to="/">
            <h1 className="route-heading">Home</h1>
          </Link>
          <Link to="/jobs">
            <h1 className="route-heading">Jobs</h1>
          </Link>
        </div>
        <button className="logout" type="button" onClick={onClickLogout}>
          LogOut
        </button>
      </div>

      <div className="mobile-header-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="mobile-header-image"
        />
        <div className=" mobile-header-route-container">
          <Link to="/">
            <AiFillHome className="mobile-icon" size={25} />
          </Link>
          <Link to="/jobs">
            <BsFillBagFill className="mobile-icon" size={22} />
          </Link>
          <button
            className="mobile-exit-icon"
            type="button"
            onClick={onClickLogout}
          >
            <RiLogoutBoxRFill className="mobile-icon" size={25} />
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(Header)
