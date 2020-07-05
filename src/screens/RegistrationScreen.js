import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { FilledButton } from "../components/FilledButton";
// import { TextButton } from  "../components/TextButton";
import { Error } from  "../components/Error";
import {IconButton} from '../components/IconButton';


export  function RegistrationScreen({navigation}) {
  return (
    <View style={styles.container}>
    <IconButton style={styles.closeIcon} name="closecircle" size={28} color="black"
      onPress={() => {
          navigation.goBack();
      }}
      />

      <Heading style={styles.title}>REGISTRATION</Heading>

      

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
       title={'Register'}
        style={styles.loginButton}
         onPress={() => {}}
          />  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  },
  closeIcon: {
      position: 'absolute',
      top: 40,
      right: 16,

  }
});
