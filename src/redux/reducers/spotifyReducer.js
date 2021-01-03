import { GET_ACCOUNT, GET_CATEGORY_DATA, GET_CATEGORY_LIST, GET_FEATURED, GET_PLAYLISTS, SEARCH_PLAYLIST } from "../actionTypes"

const initialState = {
    account: null,
    profile_playlist: null,
    featured: null,
    categorylist: null,
    categorydata: [],
    search:null
}

export const spotifyReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_ACCOUNT:
            return { ...state, account: payload }
        case GET_PLAYLISTS:
            return { ...state, profile_playlist: payload }
        case GET_FEATURED:
            return { ...state, featured: payload }
        case GET_CATEGORY_LIST:
            return { ...state, categorylist: payload }
        case GET_CATEGORY_DATA:
            return { ...state, categorydata: [...state.categorydata, payload] }
        case SEARCH_PLAYLIST:
            return { ...state, search: payload }
        default:
            return state
    }
}
