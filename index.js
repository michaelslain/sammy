import Discord from 'discord.js'
import env from 'dotenv'

env.config()

const bot = new Discord.Client()
const token = process.env.TOKEN

bot.on('ready', () => {
    console.log('Sammy is online')
})

bot.on('message', async msg => {
    const args = msg.content.split('!run')

    if (args[0] === '') {
        try {
            const answer = await eval(args[1])

            msg.channel.send(randomChar() + ' `' + answer + '`')
        } catch (err) {
            msg.channel.send(String(':sushi: `' + err + '`'))
        }
    }
})

function randomChar() {
    const random = Math.floor(Math.random() * 2 + 1)

    if (random === 1) return ':fish:'
    else return ':tropical_fish:'
}

bot.login(token)
