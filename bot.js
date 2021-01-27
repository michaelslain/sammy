import Discord from 'discord.js'
import env from 'dotenv'
import { Worker } from 'worker_threads'

env.config()

const bot = new Discord.Client()
const token = process.env.TOKEN

const error = text => `:sushi: \`${text}\``

const answer = text => {
    const fish = () => {
        const random = Math.floor(Math.random() * 2 + 1)

        if (random === 1) return ':fish:'
        else return ':tropical_fish:'
    }

    return `${fish()} \`${text}\``
}

bot
    // checks if server has started
    .on('ready', () => {
        console.log('Sammy is online')
    })
    // handles messages
    .on('message', msg => {
        // creates async thread
        return new Promise(resolve => {
            try {
                if (msg.client.user.tag.includes('Tasty')) {
                    msg.channel.send(error('Shut up loser no one asked'))
                    return
                }

                msg.content = msg.content.trim()

                if (msg.content.substring(0, 4) !== '!run') return

                const code = msg.content.slice(4)
                const path = './compile.js'
                const thread = new Worker(path)

                // times out thread to prevent while loops
                const timeout = setTimeout(() => {
                    msg.channel.send(
                        error(
                            'Code took too long to run, probably using while true loops :D'
                        )
                    )
                    thread.terminate()
                }, 10000)

                thread.postMessage({ code })

                thread.once('message', message => {
                    msg.channel.send(message)
                    thread.terminate()
                })
                thread.on('error', err => {
                    console.error(err)
                    msg.channel.send(
                        error('There was an error with the server')
                    )
                    thread.terminate()
                })
                thread.once('exit', () => {
                    clearTimeout(timeout)
                    resolve()
                })
            } catch (err) {
                console.error(err)
                resolve()
            }
        })
    })
    // logs into discord bot profile
    .login(token)
