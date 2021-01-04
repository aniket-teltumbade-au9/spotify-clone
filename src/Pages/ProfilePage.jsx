import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getAccount, getPlaylists } from '../redux/actions/spotifyActions'

class ProfilePage extends Component {
    componentDidMount = () => {
        this.props.getAccount()
        this.props.getPlaylists()
    }
    render() {
        console.log("Profile page ", this.props)
        return (
            <>
            <Navbar />
            <div className="Profile">
                <div className="user-details">
                    {this.props.AccountData ? (<><div className="img" style={{ backgroundImage: `url(${this.props.AccountData.images[0]?this.props.AccountData.images[0].url:"https://www.pikpng.com/pngl/m/154-1540525_male-user-filled-icon-my-profile-icon-png.png"})` }}></div>
                        <div className="list">
                            <p>PROFILE</p>
                            <h1 className="display-3">{this.props.AccountData.display_name}</h1>
                            {this.props.PlaylistData ? (<p>{this.props.PlaylistData.items.filter(ep => ep.public === true).length} Public Playlists</p>) : null}
                            {this.props.PlaylistData ? (<p>{this.props.PlaylistData.items.filter(ep => ep.public === false).length} Private Playlists</p>) : null}
                        </div></>) : "Loading..."}
                </div>
                <div className="playlists">
                    <h5 className="display-5 text-light m-3">Public Playlists</h5>
                    {
                        this.props.PlaylistData ? (<>
                            <div className="items">
                                {this.props.PlaylistData.items.filter(ep => ep.public === true).map(el => 
                                <Link to={`/playlist/`} className="item" key={el.name}>
                                    <div className="img" style={{backgroundImage:`url(${el.images[0].url})`}}></div>
                                    <div className="text">{el.name}</div>
                                </Link>)}
                            </div>
                        </>) :
                            ""
                    }
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (storeState) => {
    return {
        AccountData: storeState.spotifyState.account,
        PlaylistData: storeState.spotifyState.profile_playlist
    }
}


export default connect(mapStateToProps, { getAccount, getPlaylists })(ProfilePage)
