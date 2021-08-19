import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/auth'
import { useHistory } from 'react-router-dom'
import '../navbar/Navbar.css'

const Logout = ({ dispatchLogoutUser }) => {
    const history = useHistory()
        
    const handleOnClick = () => {
        dispatchLogoutUser().then(() => history.push("/"))
    }

    return (
        <button className="nav-links user-functions" onClick={handleOnClick}>
            Logout
        </button>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLogoutUser: () => dispatch(logoutUser())
    }
}
export default connect(null, mapDispatchToProps)(Logout)