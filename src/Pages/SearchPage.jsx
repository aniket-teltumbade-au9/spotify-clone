import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

class SearchPage extends Component {
    render() {
        console.log(this.props)
        return (
            <>
            <Navbar />
            <div>

            </div>
            </>
        )
    }
}

const mapStateToProps = (storeState) => {
    /* return{searchData:storeState.spotifyState.search} */
}

export default connect(mapStateToProps, null)(SearchPage)
