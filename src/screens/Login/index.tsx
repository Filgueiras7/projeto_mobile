// src/screens/Login/index.tsx
import { Image } from 'react-native';
import { Wrapper, Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';

import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';

export default function Login({ navigation }) {

  const handleLogin = () => {
    // Exemplo de login com dados fixos (pode ser modificado para integração com a API)
    const userData = { email: 'user@example.com', name: 'Usuario' };
    

    navigation.navigate('Auth', { screen: 'Home' });
  };

  return (
    <Wrapper>
      <Image source={BGTop} />
      <Container>
        <Form>
          <Logo />
          <Input label='E-mail' placeholder='digite seu e-mail'/>
          <Input label='Senha' placeholder='digite sua senha'/>
          <Button 
            title="Entrar" 
            noSpacing={true} 
            variant='primary'
            onPress={handleLogin}  // **ALTERADO**: Usa a função handleLogin
          />
          <TextContainer>
            <TextBlack>Não tem uma conta?</TextBlack>
            <TextLinkContainer onPress={() => navigation.navigate('FormScreen')}>
              <TextLink>
                Crie agora mesmo.
              </TextLink>
            </TextLinkContainer>
          </TextContainer>
        </Form>
      </Container>
    </Wrapper>
  );
}
