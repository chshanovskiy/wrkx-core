import { t } from '~/wrkx-server/core'

import { ping } from './routes/ping'

export const router = t.router({
  /** Ping */
  ping,
})

export type Routes = typeof router
