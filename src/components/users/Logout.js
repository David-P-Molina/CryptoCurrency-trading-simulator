import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/auth'
import { useHistory } from 'react-router-dom'

const Logout = ({ dispatchLogoutUser }) => {
    const history = useHistory()
}