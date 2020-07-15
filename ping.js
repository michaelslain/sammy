import { exec } from 'child_process'

const uri = 'https://sammy-discord-bot.herokuapp.com/'

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
