import {Platform,StatusBar,
  useColorScheme, StyleSheet,
   SafeAreaView, KeyboardAvoidingView } from 'react-native'

import React, { useEffect } from 'react';
import RootStack from './routes/RootStack';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import  { Colors } from './utility/constants';



const AppEntry = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 200);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        style={styles.root}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <GestureHandlerRootView style={styles.root}>
          <StatusBar barStyle={'dark-content'}
            backgroundColor={Colors.white}
          />
          <RootStack/>
        </GestureHandlerRootView>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AppEntry

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

});