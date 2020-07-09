import express from 'express'
import './bot.js'

const port = process.env.PORT || 5000

express()
    // ROUTES
    .get('/', (req, res) => {
        res.send('Welcome to Sammy!')
    })
    // Starting server
    .listen(port, () => console.log(`Server is running on ${port}`))
