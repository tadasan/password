
const passwords = {
    milda: {
        name: 'milda',
        password: 'd7a26e969305c676d392bf25e9faa903',
    }
}

function submit() {
    const input = document.querySelector("#password-input").value
 
    const hashed = CryptoJS.MD5(input).toString()
    if (hashed === passwords.milda.password) {
        const inner = document.querySelector('#main').innerHTML 
     //   var encrpyted = CryptoJS.AES.encrypt(inner, passwords.milda.password).toString()
        const decrypted = CryptoJS.AES.decrypt(inner, 'atsiprašau').toString(CryptoJS.enc.Utf8)
        document.querySelector('#main').innerHTML = decrypted
        document.querySelector("#main").style.visibility = 'visible'
        document.querySelector("#form").style.visibility = 'hidden'
    }
}
