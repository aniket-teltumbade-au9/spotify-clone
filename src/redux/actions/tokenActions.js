import { TOKEN_ADD, TOKEN_GET } from "../actionTypes";

export const addToken = (token) => async (dispatch) => {
    console.log(token)
    if (token) {
        
        dispatch({
            type: TOKEN_ADD,
            payload: token
        })
        sessionStorage.setItem("token", token)
    }
    else{
        dispatch({
            type: TOKEN_ADD,
            payload: null
        })
    }
}
export const getToken = () => async (dispatch) => {
        dispatch({
            type: TOKEN_GET,
            payload: sessionStorage.getItem("token")
        })
}
