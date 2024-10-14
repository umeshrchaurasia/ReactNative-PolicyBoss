import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.root}>
      <TextInput placeholder="Type here..." style={styles.input} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginHorizontal: 20,
    width: '100%',
    height: 60,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  text: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '900',
  },
  input: {
    height: 50,
    marginHorizontal: 20,
    borderWidth: 1,
    width: '80%',
  },
});
