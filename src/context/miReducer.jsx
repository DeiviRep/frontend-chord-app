import types from "./types";

const miReducer = (state = {}, action_login_logout) => {
    switch (action_login_logout.type) {
        case types.login:
            return {
                estado: true
            }
        case types.logout:
            return {
                estado: false
            }
        default:
            return state
    }
}

export default miReducer