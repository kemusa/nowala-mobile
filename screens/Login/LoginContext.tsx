import { createContext } from 'react';
import { LoginProps } from './types';

const LoginContext = createContext({} as LoginProps);

export default LoginContext;
