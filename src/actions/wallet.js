import { CREATE_WALLET } from "."

export function createWallet(walletInfo) {
    return (dispatch) => {
        return fetch("http://localhost:3001/wallets"), {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: getToken()
            },
            body: walletInfo
        }
    }
}