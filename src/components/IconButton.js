import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
// import {useTheme} from '@react-navigation/native';

export function IconButton({name, size, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <AntDesign name={name} size={size}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});