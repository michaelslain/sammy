import { parentPort } from 'worker_threads'

const error = text => `:sushi: \`${text}\``

const answer = text => {
    const fish = () => {
        const random = Math.floor(Math.random() * 2 + 1)

        if (random === 1) return ':fish:'
        else return ':tropical_fish:'
    }

    return `${fish()} \`${text}\``
}

parentPort.once('message', ({ code }) => {
    try {
        let message = ''

        // allows for user to  make bot say stuff
        const print = text => {
            message += answer(text) + '\n'
        }

        // doesn't allow for require function to be called
        const require = _ => {
            parentPort.postMessage(error('Require function is not allowed'))
        }

        try {
            message += answer(eval(code))
        } catch (err) {
            parentPort.postMessage(error(err))
        }

        parentPort.postMessage(message)
    } catch (err) {
        parentPort.postMessage(error('There was an error with the server'))
    }
})
