import { Title } from '@mantine/core'

interface HeadingProps {
  title: string
}

export function Heading({ title }: HeadingProps) {
  return <Title>{title}</Title>
}
