import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import type { Routes } from '~/wrkx-server/routes'

export const api = createTRPCProxyClient<Routes>({
  links: [httpBatchLink({ url: '/api' })],
})
