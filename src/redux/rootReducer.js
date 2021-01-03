import { combineReducers } from "redux";
import { spotifyReducer } from "./reducers/spotifyReducer";
import { tokenReducer } from "./reducers/tokenReducer";

export const rootReducer = combineReducers({
    tokenstate: tokenReducer,
    spotifyState: spotifyReducer
})