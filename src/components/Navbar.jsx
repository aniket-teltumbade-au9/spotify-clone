import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getAccount } from '../redux/actions/spotifyActions'
import { getToken } from '../redux/actions/tokenActions'

/* alert(sessionStorage.getItem('token')) */
class Navbar extends Component {
    state = {
        search: ''
    }
    componentDidMount = () => {
        this.props.getToken()
        this.props.getAccount()

    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("hey", prevProps.tokenString !== this.props.tokenString)
        if (prevProps.tokenString !== this.props.tokenString) {
            this.props.getAccount()
            this.props.getToken()
        }
    }
    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {

        this.props.history.push(`/search/${this.state.search}`)
        e.preventDefault()
    }
    render() {
        console.log("navabr router", this.props.match.path.split(":")[0])
        return (
            <nav className="Navbar" >
                <div className="nav-button navigation">
                    <i className="fas fa-angle-left"></i>
                    <i className="fas fa-angle-right"></i>
                    {this.props.match.path.split(":")[0] === "/search/" || this.props.match.path.split(":")[0] === "/search" ?
                        <form class="search-wrapper" onSubmit={this.handleSubmit}>
                            <button type="submit"><span class="fad fa-search"></span></button>
                            <input type="search" name="search" placeholder="Search Here..." onChange={this.handleInput} />
                        </form>
                        : null}
                </div>
                <div className="nav-button social">
                    {sessionStorage.getItem('token') != null ?
                        (<div className="w3-dropdown-hover w3-right" >
                            <button className="w3-button w3-black nav-btn" style={{ right: "10px;", width: "150px", display: "flex", justifyContent: "flex-start", alignItems: "center", overflow: "hidden" }}>{this.props.AccountData ? <>
                                {<div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundImage: `url(${this.props.AccountData.images[0] ? this.props.AccountData.images[0].url : null})` }}> &nbsp;&nbsp;</div>}
                                <div>{this.props.match.path.split(":")[0] !== "/search/" || this.props.match.path.split(":")[0] !== "/search"  ? this.props.AccountData.display_name : null}</div>
                            </> : 'Loading'}</button>
                            <div className="w3-dropdown-content w3-bar-block w3-border" style={{ right: "10px" }}>
                                <Link to="/account" className="w3-bar-item w3-button">Account</Link>
                                <Link to="/profile" className="w3-bar-item w3-button">Profile</Link>
                                <div className="w3-border-bottom"></div>
                                <button className="w3-bar-item w3-button">Log out</button>
                            </div>
                        </div>) :
                        (<a className="w3-button w3-black nav-btn mr-5" href="http://localhost:8888/login">
                            <i className="fab fa-spotify">&nbsp;&nbsp;&nbsp;</i>
                            Login With Spotify</a>)}
                </div>
            </nav>
        )
    }
}
const mapStateToProps = (storeState) => {
    return {
        AccountData: storeState.spotifyState.account,
        tokenString: storeState.tokenstate.token
    }
}


export default withRouter(connect(mapStateToProps, { getAccount, getToken })(Navbar))

//export default Navbar
