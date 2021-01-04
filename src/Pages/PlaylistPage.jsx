import moment from 'moment'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import Player from '../components/Player'
import { getPlaylistTracks, playTrack } from '../redux/actions/spotifyActions'

class PlaylistPage extends Component {
    componentDidMount = () => {
        this.props.getPlaylistTracks(sessionStorage.getItem("token"), this.props.match.params.pid)

    }
    handlePlay = (id) => {
        console.log(id)
        this.props.playTrack(id)
    }
    render() {
        //console.log(this.props.tracks.tracks)
        return (
            <>
                <Navbar />
                <div className="Playlist">
                    {this.props.tracks ? <><div className="header" style={{ backgroundColor: `${this.props.tracks.primary_color}` }}>
                        <div className="img" style={{ backgroundImage: `url(${this.props.tracks.images[0].url})` }}></div>
                        <div className="details">
                            <h1 className="display-3">{this.props.tracks.name}</h1>
                            <div>{this.props.tracks.description}</div>
                        </div>
                    </div>
                        <table className="table table-borderless table-hover table-dark" style={{ color: "white", width: "100%", position: "relative", float: "right" }}>
                            <thead>
                                <tr>
                                    <th width="180">TITLE</th>
                                    <th width="190">ALBUM</th>
                                    <th width="180">DATE_ADDED</th>
                                    <th width="70">🕒</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.tracks.tracks.items.map(el => <tr onMouseUpCapture={() => this.handlePlay(el.track.id)}>
                                    <td width="210">{el.track.name}</td>
                                    <td width="20">{el.track.album.name}</td>
                                    <td width="180">{moment(el.added_at, "YYYY[-]MM[-]DD[T]HH[:]mm[:]ss[Z]").fromNow()}</td>
                                    <td width="70">
                                        {moment.utc(el.track.duration_ms).format('mm:ss')}  </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </> : "Loading..."}</div>
                <Player />
            </>
        )
    }
}

const mapStateToProps = (storeState) => {
    return { tracks: storeState.spotifyState.playlist_tracks }
}



export default connect(mapStateToProps, { getPlaylistTracks, playTrack })(PlaylistPage)
