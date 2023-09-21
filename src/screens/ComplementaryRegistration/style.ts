import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  justify-content: start;
  align-items: start;
  padding: 43px;
`
export const BrandName = styled.Text`
    margin-top: 40px;
    font-weight: 500;
    font-size: 18px;
`
export const Logo = styled.Image`
   margin-bottom: 16px;
   margin-top: 60px;
   width: 128px;
   height: 128px;
   margin: 60px auto 0 auto
   
`

export const ButtonImage = styled.Text`
    margin: 16px auto 30px auto;
`
export const Form = styled.View`
    flex: 1;
    align-items: center;    
`

export const FormStyle = styled.View`
flex-direction: row; 
  justify-content: space-between; 
  gap: 5px;
`

export const FirstColumn = styled.View`
  flex: 7; 
`;

export const SecondColumn = styled.View`
  flex: 3;
`;

export const ContainerButton = styled.View`
    margin-top: 20px;
    width: 100%;
`

