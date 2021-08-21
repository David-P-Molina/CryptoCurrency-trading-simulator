import { CREATE_WALLET } from "."
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
                Authorization: getToken()
            },
            body: walletInfo
        }
        dispatch({ type: CREATE_WALLET, payload: true })
        fetch("http://localhost:3001/wallets"), 
    }
}