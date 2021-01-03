import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { addToken } from "../redux/actions/tokenActions";
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { getCategoryData, getCategoryList, getFeatured } from '../redux/actions/spotifyActions';
class HomePage extends Component {
    componentDidMount = () => {
        let q = this.props.location.search
        let token = queryString.parse(q)
        if (token.access_token) {
            this.props.addToken(token.access_token)
            this.props.getFeatured(token.access_token)
            this.props.getCategoryList(token.access_token)
            if (this.props.categoryList && this.props.categorydata.length === 0) {
                this.props.categoryList.categories.items.map(el => this.props.getCategoryData(token.access_token, el.id, el.name))
            }
        }

        else if (sessionStorage.getItem("token")) {
            this.props.getFeatured(sessionStorage.getItem("token"))
            this.props.getCategoryList(sessionStorage.getItem("token"))
            if (this.props.categoryList && this.props.categorydata.length === 0) {
                this.props.categoryList.categories.items.map(el => this.props.getCategoryData(sessionStorage.getItem("token"), el.id, el.name))
            }
        }
    }
    componentDidUpdate=(prevProps,prevState)=>{
        if (this.props.categoryList && this.props.categorydata.length === 0) {
            this.props.categoryList.categories.items.map(el => this.props.getCategoryData(sessionStorage.getItem("token"), el.id, el.name))
        }
    }
    render() {
        console.log("test2", this.props)
        return (
            <>
                <Navbar />
                <div className="Home">
                    {this.props.categorydata.length > 0 ?
                        (this.props.categorydata.map(ep =>
                            <>
                                <div className="rows">
                                    <div className="header">
                                        <div className="title">
                                            {ep.name}</div>
                                        <div className="subtitle"></div>
                                    </div>
                                    <div className="items">
                                    {ep.playlist.playlists.items.slice(0, 4).map(el => <div className="item">
                                            <div className="img" style={{ backgroundImage: `url(${el.images[0].url})` }}></div>
                                            <div className="title">{el.name}</div>
                                            <div className="subtitle">{el.description}</div>
                                        </div>)
                                        }
                                    </div>
                                </div>
                            </>
                        )) : (<></>)

                    }
                    {this.props.featured ?
                        (
                            <>
                                <div className="rows">
                                    <div className="header">
                                        <div className="title">{this.props.featured.message}</div>
                                        <div className="subtitle"></div>
                                    </div>
                                    <div className="items">
                                        {this.props.featured.playlists.items.slice(0, 4).map(el => <div className="item">
                                            <div className="img" style={{ backgroundImage: `url(${el.images[0].url})` }}></div>
                                            <div className="title">{el.name}</div>
                                            <div className="subtitle">{el.description}</div>
                                        </div>)
                                        }
                                    </div>
                                </div>
                            </>
                        ) :
                        (<></>)}
                </div>
            </>
        )
    }
}
const mapStateToProps = (storeState) => {
    return {
        featured: storeState.spotifyState.featured,
        categoryList: storeState.spotifyState.categorylist,
        categorydata: storeState.spotifyState.categorydata
    }
}

export default withRouter(connect(mapStateToProps, { addToken, getFeatured, getCategoryList, getCategoryData })(HomePage))
