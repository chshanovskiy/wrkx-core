import { useUnit } from 'effector-react'

import { Heading } from '~/wrkx-client/shared/ui'

import { $ping } from './model'

export function HomePage() {
  const ping = useUnit($ping)
  console.debug({ ping })

  return (
    <section>
      <Heading title="Home" />
      <code>{JSON.stringify({ ping })}</code>
    </section>
  )
}
