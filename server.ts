import express from 'express'
import http from 'http'
import cors from 'cors'

import 'dotenv/config'

const app = express()
const server = http.createServer(app)

/* <-- MIDDLEWARE --> */
app.use(
	cors({
		origin: ['http://localhost:3000'],
		credentials: true,
		methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT', 'DELETE'],
	})
)

/* <-- ROUTES --> */

const port = 8000 || process.env.PORT

server.listen(port, () => {
	console.log(`Server sucessfully started and listening on port ${port}`)
})
