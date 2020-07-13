import express from 'express'
import cors from 'cors'
import './bot.js'

const port = process.env.PORT || 5000
const isProduction = process.env.PORT != null

express()
    // MIDDLEWARES
    .use(cors())
    .use(express.static('client'))

    // ROUTES
    .get('*', (req, res) => {
        if (isProduction) {
            const path = './client/build/index.html'
            res.sendFile(path)
            return
        }

        res.send('Welcome!')
    })

    // Starting server
    .listen(port, () => console.log(`Server is running on ${port}`))
