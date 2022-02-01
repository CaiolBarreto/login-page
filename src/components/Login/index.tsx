import { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

import {
  SideImage,
  LogoCamp,
  LoginLogo,
  Mail,
  Eye,
  Lock,
} from '../../assets';

import {
  PasswordInfos,
  InsideInput,
  InputInfo,
  Container,
  MainInfos,
  Button,
  Center,
  Infos,
  Title,
  Input,
  Image,
  Logo,
} from './style';

export const Login: React.ElementType = () => {
  const [email, setEmail] = useState<string>('emailNotActive');
  const [password, setPassword] = useState<string>('passwordNotActive');

  return (
    <Container>
      <Center>
        <Logo>
          <img src={LogoCamp} alt="logo" />
          <h3>camp.in</h3>
        </Logo>
        <Infos>
          <MainInfos>
            <Title>
              <img src={LoginLogo} alt="login" />
              <p>Faça seu login</p>
            </Title>
            <p style={{ color: '#AFB6C2', fontSize: '16px' }}>Entre com suas informações de cadastro</p>
            <InputInfo>
              <p>Email</p>
              <InsideInput
                id={email}
                typeof="email"
                onClick={() => {
                  if (email === 'emailNotActive') {
                    setEmail('emailActive');
                    setPassword('passwordNotActive');
                  }
                }}
              >
                <img src={Mail} alt="mail" id="mail" />
                <Input placeholder="Digite seu email" />
              </InsideInput>
            </InputInfo>
            <InputInfo>
              <p>Senha</p>
              <InsideInput
                id={password}
                typeof="password"
                onClick={() => {
                  if (password === 'passwordNotActive') {
                    setPassword('passwordActive');
                    setEmail('emailNotActive');
                  }
                }}
              >
                <img src={Lock} alt="lock" id="lock" />
                <Input placeholder="Digite sua senha" />
                <img src={Eye} alt="Eye" id="eye" />
              </InsideInput>
            </InputInfo>
            <PasswordInfos>
              <FormControlLabel
                style={{ color: '#868686' }}
                label="Lembre-me"
                control={(
                  <Checkbox sx={{
                    color: '#868686',
                    '&.Mui-checked': {
                      color: '#FFC632',
                    },
                  }}
                  />
                )}
              />
              <p>Esqueci minha senha</p>
            </PasswordInfos>
            <Button>
              <p>ENTRAR</p>
            </Button>
            <p style={{ color: '#FFC632', textAlign: 'center', marginTop: '15px' }}>
              Não tem uma conta?
              {' '}
              <span style={{ color: '#FFC632', fontWeight: 600, cursor: 'pointer' }}>Registre-se</span>
            </p>
          </MainInfos>
        </Infos>
      </Center>
      <Image src={SideImage} />
    </Container>
  );
};
