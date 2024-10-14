import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomStack from './BottomStack';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomStack"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '75%',
        },
      }}>
      <Drawer.Screen name="BottomStack" component={BottomStack} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
