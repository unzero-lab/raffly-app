import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import {
  BackIcon,
  Container,
  CourtesyMessage,
  NotificationIcon,
  NotificationProps,
  ProfileContent,
  ProfileImage,
  ProfileName,
} from './styles'

type HeaderProps = {
  showBackButton?: boolean
} & NotificationProps

export function Header({ showBackButton = false, hasNotification = false }: HeaderProps) {
  return (
    <Container>
      <ProfileContent>
        {showBackButton ? (
          <TouchableOpacity>
            <BackIcon />
          </TouchableOpacity>
        ) : (
          <>
            <ProfileImage
              source={{
                uri: 'https://avatars.githubusercontent.com/u/2254731?v=4',
              }}
              alt="Profile Image"
            ></ProfileImage>

            <View>
              <CourtesyMessage>Seja bem-vindo</CourtesyMessage>
              <ProfileName>Lucas Prince</ProfileName>
            </View>
          </>
        )}
      </ProfileContent>

      <TouchableOpacity>
        <NotificationIcon hasNotification={hasNotification} />
      </TouchableOpacity>
    </Container>
  )
}
