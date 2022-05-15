const connectWalletBtn = document.querySelector(".default__frame-connect")

const downloadUrl = 'https://metamask.io/download/'

connectWalletBtn.onclick = () => {
    if (!window.ethereum) {
        window.open(downloadUrl, "_blank")
    } else {
        loginWithMetaMask()
    }
}


async function loginWithMetaMask() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        .catch((e) => {
            console.error(e.message)
            return
        })
    if (!accounts) { return }

    window.userWalletAddress = accounts[0]
    console.log(window.userWalletAddress)
}

setTimeout(() => { window.userWalletAddress = null }, 1000)