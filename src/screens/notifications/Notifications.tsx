import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Notifications = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Notifications</Text>
    </View>
  );
};

export default Notifications;

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
});
