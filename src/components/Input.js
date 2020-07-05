import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
// import {useTheme} from '@react-navigation/native';

export function Input({style, ...props}) {
  //const {colors} = useTheme();
  return (
    <TextInput {...props} style={[ styles.input, style]} />
    
   
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    color: 'black',
  },
});