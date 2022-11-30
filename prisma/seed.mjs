// @ts-check
import client from '@prisma/client'

const prisma = new client.PrismaClient()

await prisma.authUser.upsert({
  where: { id: 1 },
  create: { id: 1, email: 'admin@wrkx' },
  update: {},
})
