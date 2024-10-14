import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {useSignin} from './Signin.hooks';

const Signin = () => {
  const {loader, onLogin} = useSignin();

  return (
    <View style={styles.root}>
      {loader && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={'#E0B01F'} />
        </View>
      )}
      <TouchableOpacity
        style={[styles.btn, loader && styles.btnDisabled]}
        onPress={loader ? null : onLogin} // Disable onPress when loading
        activeOpacity={loader ? 1 : 0.7} // Disable touch feedback when loading
      >
        <Text style={styles.text}>Signin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  btn: {
    paddingHorizontal: 20,
    width: '80%',
    height: 60,
    borderRadius: 8,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    opacity: 1, // Fully visible
  },
  btnDisabled: {
    opacity: 0.5, // Make button semi-transparent when loading
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
});
