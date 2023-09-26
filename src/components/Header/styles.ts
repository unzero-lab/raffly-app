import styled, { css } from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'

export type NotificationProps = {
  hasNotification?: boolean
}

export const Container = styled.View`
  ${({ theme }) => css`
    height: 115px;
    background-color: ${theme.COLORS.GREEN_400};
    justify-content: space-between;
    padding: 49px 25px 0 25px;
    flex-direction: row;
    align-items: center;
    width: 100%;
  `}
`

export const ProfileContent = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const ProfileName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    margin-left: 10px;
  `}
`

export const CourtesyMessage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-left: 10px;
  `}
`

export const NotificationIcon = styled(Octicons).attrs<NotificationProps>(({ theme, hasNotification }) => ({
    name: hasNotification ? 'bell-fill' : 'bell',
    size: 22,
    color: theme.COLORS.WHITE,
}))``

export const BackIcon = styled(AntDesign).attrs(({ theme }) => ({
  name: 'back',
  size: 26,
  color: theme.COLORS.WHITE,
}))``
