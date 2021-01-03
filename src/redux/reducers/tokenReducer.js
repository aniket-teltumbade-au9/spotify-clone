import { TOKEN_ADD, TOKEN_GET } from "../actionTypes"

const initialState = {
    token:null
}

export const tokenReducer= (state = initialState, { type, payload }) => {
    switch (type) {

    case TOKEN_ADD:
        return { ...state, token:payload }
    case TOKEN_GET:
        return { ...state, token:payload }

    default:
        return state
    }
}
