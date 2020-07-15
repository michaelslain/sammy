const ping = () => {
    const uri = 'https://sammy-discord-bot.herokuapp.com/'
    fetch(uri)
}

setInterval(ping, 29999)
