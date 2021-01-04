import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Player from '../components/Player'
import { searchPlaylist } from '../redux/actions/spotifyActions'

class SearchPage extends Component {
    componentDidMount = () => {
        if (sessionStorage.getItem("token")) {
            this.props.searchPlaylist(sessionStorage.getItem("token"), this.props.match.params.term)
        }
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="Search">
                    <div className="items">
                        {this.props.searchData?this.props.searchData.playlists.items.map(el => 
                        <Link to={`/playlist/${el.id}`} className="item">
                            <div className="img" style={{ backgroundImage: `url(${el.images[0].url})` }}></div>
                            <div className="title">{el.name.slice(0,20)}...</div>
                            <div className="subtitle">{el.description.slice(0,30)}...</div>
                        </Link>):"Loading"
                        }
                    </div>

                </div>
                <Player />
            </>
        )
    }
}

const mapStateToProps = (storeState) => {
    return { searchData: storeState.spotifyState.search }
}

export default connect(mapStateToProps, { searchPlaylist })(SearchPage)
