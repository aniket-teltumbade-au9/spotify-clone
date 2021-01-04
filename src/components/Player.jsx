import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playTrack } from '../redux/actions/spotifyActions'

class Player extends Component {
    render() {
        return (
            <div className="Player">
                <div class='embed-container'>
                    {this.props.id?
                    <iframe src={`https://open.spotify.com/embed/track/${this.props.id}`} width='300' height='300' frameborder='0' allowtransparency='true' allow='encrypted-media' title="initial" ></iframe>
                    :<iframe src='https://open.spotify.com/embed/track/31qCy5ZaophVA81wtlwLc4' width='300' height='300' frameborder='0' allowtransparency='true' allow='encrypted-media' title="initial" ></iframe>}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (storeState) => {
    return { id: storeState.spotifyState.playing }
}



export default connect(mapStateToProps, { playTrack })(Player)
