import { Amplify, Auth } from 'aws-amplify';
import { useLogin, useNotify} from 'react-admin';
import { Authenticator, View, Text, Heading, Button, useTheme, useAuthenticator, createTheme, defaultTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
import {ReactComponent as Logo} from '../assets/LogoGrande2.svg';
import './loginPage.css'
Amplify.configure(awsExports);



const amplifyAuthenticatorStyle ={
    "display": "flex",
    "backgroundColor": "black",
    "justify-content": "center",
    "primary": 'black',
    "alignItems": "center",
    "flex": 1,
    "height": "100vh",
  }


export default function LoginPage() {
    const login = useLogin();
    const notify = useNotify();
  
    const services = {
        async handleSignIn(formData){
            let { username, password } = formData
            login( {username, password }).catch(() =>
            notify('Correo o contraseña incorrectos')
        );
        },
        async handleSignUp(formData) {
        let { username, password, attributes } = formData;
        // custom username
        username = username.toLowerCase();
        attributes.email = attributes.email.toLowerCase();
        return Auth.signUp({
            username,
            password,
            attributes,
        });
        },
    };

  return (
    <Authenticator 
      theme={amplifyAuthenticatorStyle}
      services={services} 
      initialState="signIn"
      formFields={formFields} 
      components={components}
      >

    </Authenticator>
  );
}

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Logo width='250px'/>
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={`${tokens.colors.neutral['80']}`}>
          &copy; Grafiflex 2022. All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Inicia Sesión
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();
      const { tokens } = useTheme();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
            color={`${tokens.colors.neutral['80']}`}>
            Restaurar Contraseña
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Crea una cuenta nueva
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      const { tokens } = useTheme();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
            color={`${tokens.colors.neutral['80']}`}
          >
            Volver a Inicio de Sesión
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: 'Correo',
    },
  },
  signUp: {
    password: {
      labelHidden: false,
      label: 'Contraseña:',
      placeholder: '',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      labelHidden: false,
      label: 'Confirma la Contraseña:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      labelHidden: false,
      placeholder: 'Ingresar contraseña:',
    },
  },
  resetPassword: {
    username: {
      labelHidden: false,
      placeholder: 'Ingrese el correo:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      labelHidden: false,
      placeholder: 'Ingresa el codigo de confirmacion:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      labelHidden: false,
      placeholder: 'Confirma la contraseña:',
    },
  },
  confirmSignIn: {
    confirmation_code: {
      labelHidden: false,
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};