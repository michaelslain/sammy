import fetch from 'node-fetch'

const ping = () => {
    const uri = 'https://sammy-discord-bot.herokuapp.com/'
    fetch(uri).then(_ => console.log('PING!'))
}

setInterval(ping, 1740000)
