import React, {useContext, useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import {AuthContex} from '../store/auth-contex';

function WelcomeScreen() {

  const [fetchMessage, setFetchMessage] = useState('');

  const authCtx = useContext(AuthContex);
  const token = authCtx.token;

  useEffect(()=>{
    axios.get('https://react-native-course-90a80-default-rtdb.firebaseio.com/expenses/message.json?auth=' + token)
    .then((resposne)=>{
     setFetchMessage(resposne.data);
    })
  },[token])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
