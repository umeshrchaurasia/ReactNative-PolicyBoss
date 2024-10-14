import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/signup/Signup';
import Signin from '../screens/signin/Signin';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import FoodRecall from '../screens/foodRecall/FoodRecall';

export type AuthStackParams = {
  FoodRecall:undefined;
  Onboarding: undefined;
  Signup: undefined;
  Signin: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade',
        headerShown: false,
      }}>
      
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
