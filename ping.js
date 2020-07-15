import { exec } from 'child_process'

const uri = 'https://sammy-discord-bot.herokuapp.com/'

const ping = () => {
    exec(`ping ${uri}`, (err, stdout, stderr) => {
        if (err) {
            console.error(err)
            return
        }
        if (stderr) {
            console.error(stderr)
            return
        }
        console.log('PING!')
    })
}

setInterval(ping, 29999)
