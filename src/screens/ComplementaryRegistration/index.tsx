import { Keyboard, KeyboardAvoidingView, Platform, ScrollView} from "react-native";
import {  BrandName, ButtonImage, Container, ContainerButton, FirstColumn, Form, FormStyle, Logo, SecondColumn } from "./style";
import Avatar from '@/assets/Avatar.png'
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";


export function ComplementaryRegistration(){

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center'}}
                keyboardShouldPersistTaps="handled"
            >
            <Container>
                <BrandName>Preencha seu perfil</BrandName>
                    <Logo  
                        source={Avatar}
                    />
                    <ButtonImage>Adicionar foto</ButtonImage>
                <Form>
                    <Input
                        placeholder="Nome"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                    />
                    <Input
                        placeholder="Sobrenome"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                    />
                    <Input
                        placeholder="Data de nascimento"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                    />
                     <FormStyle>
                        <FirstColumn>
                        <Input
                            placeholder="Cidade"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                        />
                        </FirstColumn>
                        <SecondColumn>
                        <Input
                            placeholder="UF"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                        />
                        </SecondColumn>
                    </FormStyle>
                    <Input
                        placeholder="Telefone"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                    />

                    <ContainerButton>
                        <Button label="Continuar" />
                    </ContainerButton>
                </Form>
            </Container>   
            </ScrollView>
        </KeyboardAvoidingView>
    )
}