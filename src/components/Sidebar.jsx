
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../components/logo/logo-light.png'
class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar w3-sidebar w3-black w3-bar-block" style={{ width: "230px" }}>
                <h3 className="w3-bar-item"><img width="35" height="35" src={logo} alt="logo"/>&nbsp;&nbsp;&nbsp;Music Mojo</h3>
                <Link to="/" className="w3-bar-item w3-button">
                    <i className="fas fa-home"></i>
                    &nbsp;&nbsp;&nbsp;Home
                </Link>
                <Link to="/search" className="w3-bar-item w3-button">
                    <i className="fas fa-search"></i>
                    &nbsp;&nbsp;&nbsp;Search
                </Link>
                <Link to="/library" className="w3-bar-item w3-button">
                    <i className="fas fa-books"></i>
                    &nbsp;&nbsp;&nbsp;Your Library
                </Link>
            </div>
        )
    }
}

export default Sidebar
