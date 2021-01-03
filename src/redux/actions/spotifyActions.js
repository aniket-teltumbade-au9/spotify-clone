import axios from "axios"
import { GET_ACCOUNT, GET_CATEGORY_DATA, GET_CATEGORY_LIST, GET_FEATURED, GET_PLAYLISTS, SEARCH_PLAYLIST } from "../actionTypes";


export const getAccount = () => async (dispatch) => {
    const token = sessionStorage.getItem('token')
    if (token) {
        var config = {
            method: 'get',
            url: 'https://api.spotify.com/v1/me',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const profile = await axios(config)
        dispatch({
            type: GET_ACCOUNT,
            payload: profile.data
        })
    }
}
export const getPlaylists = () => async (dispatch) => {
    const token = sessionStorage.getItem('token')
    if (token) {
        var config = {
            method: 'get',
            url: 'https://api.spotify.com/v1/me/playlists',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const playlist = await axios(config)
        dispatch({
            type: GET_PLAYLISTS,
            payload: playlist.data
        })
    }
}
export const getFeatured = (token) => async (dispatch) => {
    if (token) {
        var config = {
            method: 'get',
            url: 'https://api.spotify.com/v1/browse/featured-playlists',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const playlist = await axios(config)
        dispatch({
            type: GET_FEATURED,
            payload: playlist.data
        })
    }
}
export const getCategoryList = (token) => async (dispatch) => {

    if (token) {
        try {

            var config = {
                method: 'get',
                url: 'https://api.spotify.com/v1/browse/categories?country=IN&limit=5',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            const playlist = await axios(config)
            dispatch({
                type: GET_CATEGORY_LIST,
                payload: playlist.data
            })
        }
        catch (error) {
            console.error(error);
        }
    }
}
export const getCategoryData = (token, category_id, name) => async (dispatch) => {
    if (token) {
        try {

            var config = {
                method: 'get',
                url: `https://api.spotify.com/v1/browse/categories/${category_id}/playlists?limit=5`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            const playlist = await axios(config)
            console.log("test3",playlist)
            dispatch({
                type: GET_CATEGORY_DATA,
                payload: { id: category_id, name:name, playlist: playlist.data }
            })
        }
        catch (error) {
            console.log(error)
        }
    }

}
export const searchPlaylist = (token, term) => async (dispatch) => {
    if (token) {
        try {

            var config = {
                method: 'get',
                url: `https://api.spotify.com/v1/search?q=${term}&type=playlist?limit=5`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            const playlist = await axios(config)
            console.log("test4",playlist)
            dispatch({
                type: SEARCH_PLAYLIST,
                payload: playlist.data 
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
