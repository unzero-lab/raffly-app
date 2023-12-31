import { ItemList, ItemProps } from '@/components/ItemList'
import { Container, Content, ContentStyle } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Navbar } from '@/components/Navbar'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { Card } from '@/components/Card'
import { useState } from 'react'

export function Home() {
  const itemsMock: ItemProps[] = [
    {
      id: '1',
      title: 'Item 1',
      description: 'Descrição do item 1',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '2',
      title: 'Item 2',
      description: 'Descrição do item 2',
      image: 'https://picsum.photos/200/400',
    },
    {
      id: '3',
      title: 'Item 3',
      description: 'Descrição do item 3',
      image: 'https://picsum.photos/400/500',
    },
    {
      id: '4',
      title: 'Item 4',
      description: 'Descrição do item 4',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '5',
      title: 'Item 5',
      description: 'Descrição do item 5',
      image: 'https://picsum.photos/200/600',
    },
    {
      id: '6',
      title: 'Item 6',
      description: 'Descrição do item 6',
      image: 'https://picsum.photos/200/700',
    },
    {
      id: '7',
      title: 'Item 7',
      description: 'Descrição do item 7',
      image: 'https://picsum.photos/200/800',
    },
    {
      id: '8',
      title: 'Item 8',
      description: 'Descrição do item 8',
      image: 'https://picsum.photos/200/900',
    },
    {
      id: '9',
      title: 'Item 9',
      description: 'Descrição do item 9',
      image: 'https://picsum.photos/300/300',
    },
    {
      id: '10',
      title: 'Item 10',
      description: 'Descrição do item 10',
      image: 'https://picsum.photos/400/300',
    },
    {
      id: '11',
      title: 'Item 11',
      description: 'Descrição do item 11',
      image: 'https://picsum.photos/500/300',
    },
  ]

  const [search, setSearch] = useState('')
  const [items, setItems] = useState<ItemProps[]>(itemsMock)

  const navigation = useNavigation()
  function handleNavigateToResult() {
    navigation.navigate('login')
  }

  return (
    <Container>
      <Header />
      <Content style={ContentStyle}>
        <Input placeholder="Pesquise" value={search} onChangeText={setSearch} />
        <Card
          image="https://picsum.photos/200/300"
          title="Sorteio 1"
          subtitle="Resultado 20/09/2023"
          description="Confira o ganhador"
          onPress={handleNavigateToResult}
        />
        <ItemList sectionTitle="Resultados" items={items} />
      </Content>
      <Navbar />
    </Container>
  )
}
