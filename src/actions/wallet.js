import { CREATE_WALLET, ADD_TO_DATABASE, ERROR, DELETE_WALLET } from "."


const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const timeAllowed = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime")
    if (timeSinceLastLogin < timeAllowed) {
        return localStorage.getItem("token")
    }
}
export function createWallet(walletInfo) {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: getToken()
            },
            body: JSON.stringify({ wallet: walletInfo })
        }
        dispatch({ type: ADD_TO_DATABASE, payload: true })
        fetch("http://localhost:3001/wallets", configObj)
        .then(res => {
            if (res.ok) {
                return res
                .json() 
                .then(json => dispatch({ type: CREATE_WALLET, payload: json }))
            } else {
                return res
                .json()
                .then((errors) => {
                    dispatch({ type: ERROR, payload: errors })
                    return Promise.reject(errors)
                })
            }
        })
        .catch(errors => dispatch({ type: ERROR, payload: errors}))
    }
}

export function deleteWallet() {
    return (dispatch) => {
        const configObj = {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: getToken(),
            }
        }
        return fetch("http://localhost:3001/wallet", configObj)
    }
}