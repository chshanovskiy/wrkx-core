import { createExpressMiddleware } from '@trpc/server/adapters/express'
import * as express from 'express'

import { createContext } from '~/wrkx-server/core'
import { router } from '~/wrkx-server/routes'

const app = express()

app.use('/api', createExpressMiddleware({ createContext, router }))

const port = process.env.port || 3333
const server = app.listen(port, () => {
  console.info(`Listening on http://localhost:${port}/api`)
})
server.on('error', console.error)
