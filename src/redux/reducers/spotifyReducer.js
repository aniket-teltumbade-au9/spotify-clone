import { GET_ACCOUNT, GET_CATEGORY_DATA, GET_CATEGORY_LIST, GET_FEATURED, GET_PLAYLISTS, GET_PLAYLISTS_DATA, PLAYING, SEARCH_PLAYLIST } from "../actionTypes"

const initialState = {
    account: null,
    profile_playlist: null,
    featured: null,
    categorylist: null,
    categorydata: [],
    search:null,
    playlist_tracks:null,
    playing:null
}

export const spotifyReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_ACCOUNT:
            return { ...state, account: payload }
        case GET_PLAYLISTS:
            return { ...state, profile_playlist: payload }
        case GET_PLAYLISTS_DATA:
            return { ...state, playlist_tracks: payload }
        case GET_FEATURED:
            return { ...state, featured: payload }
        case GET_CATEGORY_LIST:
            return { ...state, categorylist: payload }
        case GET_CATEGORY_DATA:
            return { ...state, categorydata: [...state.categorydata, payload] }
        case SEARCH_PLAYLIST:
            return { ...state, search: payload }
        case PLAYING:
            return { ...state, playing: payload }
        default:
            return state
    }
}
