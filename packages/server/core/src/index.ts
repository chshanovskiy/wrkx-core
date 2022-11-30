import { PrismaClient } from '@prisma/client'
import { initTRPC } from '@trpc/server'

interface Context {
  prisma: PrismaClient
  [key: string]: unknown
}

export const createContext = (): Context => {
  return {
    prisma: new PrismaClient({ datasources: { db: {} } }),
  }
}

export const t = initTRPC.context<Context>().create()
