import { Container, Subtitle, Description, Image, Title, ImageContainer } from './styles'

type CardProps = {
  title: string
  subtitle: string
  description?: string
  image?: string
}

export function Card({ title, subtitle, image, description }: CardProps) {
  return (
    <Container>
      <ImageContainer>
        {image && <Image source={{ uri: image }} />}
        <Title>{title}</Title>
      </ImageContainer>
      <Subtitle numberOfLines={1}>{subtitle}</Subtitle>
      {description && <Description numberOfLines={1}>{description}</Description>}
    </Container>
  )
}
