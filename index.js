import express from 'express'
import './bot.js'
import { Worker } from 'worker_threads'

const port = process.env.PORT || 5000
const isProduction = process.env.PORT != null

express()
    // Dummy Route
    .get('/', (req, res) => res.send('Welcome'))

    // Start Server
    .listen(port, () => {
        console.log(`Server has started on port ${port}`)

        if (!isProduction) return

        try {
            const path = './ping.js'
            const thread = new Worker(path)

            thread.on('error', err => console.error(err))
            thread.on('exit', () => console.error('Pinging has stopped'))
        } catch (err) {
            console.error(err)
        }
    })
