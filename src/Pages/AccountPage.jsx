import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { getAccount } from '../redux/actions/spotifyActions'

class AccountPage extends Component {
    componentDidMount = () => {
        this.props.getAccount()
    }
    render() {
        console.log(this.props.AccountData)
        return this.props.AccountData ? (
            <>
            <Navbar />
            <div className="Account p-5">
                <h1 className="display-2 text-start w-100">Account Overview</h1>
                <h3 className="display-4 text-start w-100">Profile</h3>
                <table className="table w-100">
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <th scope="row" className="text-end">{this.props.AccountData.display_name}</th>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <th scope="row"  className="text-end">{this.props.AccountData.email}</th>
                        </tr>
                        <tr>
                            <td>Country or region</td>
                            <th scope="row"  className="text-end">{this.props.AccountData.country}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
        ) : "Loading..."
    }
}

const mapStateToProps = (storeState) => {
    return { AccountData: storeState.spotifyState.account }
}


export default connect(mapStateToProps, { getAccount })(AccountPage)
