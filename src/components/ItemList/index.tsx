import { FlatList, Text } from 'react-native'
import {
  ItemDescription,
  ItemContainer,
  TextContainer,
  SectionTitle,
  ItemImage,
  ItemTitle,
} from './styles'

export type ItemProps = {
  id: string
  title: string
  description: string
  image: string
}

export function ItemList({ items, sectionTitle }: { items: ItemProps[]; sectionTitle: string }) {
  return (
    <>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', flex: 1 }}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemContainer>
            <ItemImage source={{ uri: item.image }} />
            <TextContainer>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </TextContainer>
          </ItemContainer>
        )}
      />
    </>
  )
}
