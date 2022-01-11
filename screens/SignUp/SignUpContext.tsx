import { createContext } from 'react';
import { SignUpProps } from './types';

const SignUpContext = createContext({} as SignUpProps);

export default SignUpContext;
