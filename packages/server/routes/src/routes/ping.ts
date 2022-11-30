import { t } from '~/wrkx-server/core'

export const ping = t.procedure.query(async ({ ctx }) => {
  return ctx.prisma.authUser.findUnique({
    select: {
      id: true,
    },
    where: {
      id: 1,
    },
  })
})
