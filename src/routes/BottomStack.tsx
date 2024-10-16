import { StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/home/Home';
import Notifications from '../screens/notifications/Notifications';
import Inquiries from '../screens/inquiries/Inquiries';
import MyMenu from '../screens/myMenu/MyMenu';
import {Colors, Fonts} from '../utility/constants';
import HomeIcon from '../assets/svg/home-icon';
import UpdateIcon from '../assets/svg/update-icon';


import { Ionicons } from '@expo/vector-icons';

import InquiriesIcon from '../assets/svg/inquiries-icon';
import ContactUsIcon from '../assets/svg/contact-us-icon';

export type BottomStackParam = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  MyMenu: undefined;
};

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Home"
   

      screenOptions={{
        tabBarInactiveTintColor: Colors.phillipineGrey,
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBarStyle, 
       
      }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel:'Home',tabBarIcon:({color})=>{
          return <HomeIcon activeColor={color}/>;
        },
      }}/>
      <Tab.Screen name="Notifications" component={Notifications} 
      options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({color}) => {
          return <UpdateIcon width={20} activeColor={color} />;
        },
      }}/>
      <Tab.Screen name="Inquiries" component={Inquiries} 
        options={{
          tabBarLabel: 'Inquiries',
          tabBarIcon: ({color}) => {
            return <InquiriesIcon width={20} height={20} activeColor={color} />;
          },
        }}/>
      <Tab.Screen name="MyMenu" component={MyMenu} 
         options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({color}) => {
            return <ContactUsIcon width={25} height={20} activeColor={color} />;
          },
        }} />
    </Tab.Navigator>
  );
};

export default BottomStack;

const styles = StyleSheet.create({

  tabBarLabel: {
    // ...Fonts.poppinsTextSemibold12,
    marginTop: 5,
    // height: 40,
    textTransform: 'none',
  },
  tabBarStyle: {
    // height: 50,
    height: 70,
    // backgroundColor: Colors.white,
    // borderWidth:.9,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    shadowColor: '#000',
    // borderTopLeftRadius:25
  },
  tabBarIndicator: {
    backgroundColor: Colors.primary,
    bottom: 70,
  },
});
