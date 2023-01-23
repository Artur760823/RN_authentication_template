import React, {useContext, useState} from 'react'
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import {AuthContex} from '../store/auth-contex';

function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContex);

  async function loginHandler({email, password}){
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication failed!', 'Could not log in. Please check your credentials or try again later!')
    }
    
    setIsAuthenticating(false);
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Loging you in..."/>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
