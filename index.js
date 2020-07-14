import express from 'express'
import './bot.js'

const port = process.env.PORT || 5000

express().listen(port, () => console.log(`Server has started on port ${port}`))
