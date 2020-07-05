import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { FilledButton } from "../components/FilledButton";
import { TextButton } from  "../components/TextButton";
import { Error } from  "../components/Error";


export  function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Login</Heading>
      <Error error={''} />
      <Input 
      style={styles.input}
       placeholder={"Email"}
       keyboardType={'email-address'}
        />
      <Input
        style={styles.input}
        placeholder={"Password"}
        secureTextEntry
        // value={password}
        // onChangeText={setPassword}
      />
      <FilledButton
       title={'Login'}
        style={styles.loginButton}
         onPress={() => {
             navigation.navigate('Registration');
         }}
          />
      <TextButton 
      title={'Have an account? Create one'}
      onPress={() => {}}
       />    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    paddingTop: 120,
  },
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
      marginVertical: 32,
  }
});
