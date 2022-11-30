import { createEffect, createStore, sample } from 'effector'
import { debug } from 'patronum'

import { api } from '~/wrkx-client/shared/api'

import { routeHome } from './routes'

const queryPingFx = createEffect({
  name: 'queryPingFx',
  handler: api.ping.query,
})

export const $ping = createStore<boolean>(false, { name: '$ping' })
debug($ping, queryPingFx)

sample({
  clock: routeHome.opened,
  target: queryPingFx,
})

sample({
  clock: queryPingFx.doneData,
  fn: (ping) => ping?.id === 1,
  target: $ping,
})
