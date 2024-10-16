import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Animated,
} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../constants/constants';
import {hdp} from '../../utils/utility';

const TabBar = ({state, descriptors, navigation, position}) => {
  // alert(JSON.stringify(state,undefined,4))
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableWithoutFeedback
                  // key={screen}
                  accessibilityRole="tab"
                  accessibilityState={isFocused ? {selected: true} : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}>
                  <View style={[styles.tab]}>
                    {/* {isFocused && <View style={[styles.activeTabBar]} />} */}
                    {/* <Icon
                      width={20}
                      height={20}
                      activeColor={
                        isActive ? Colors.primary : Colors.phillipineGrey
                      }
                    />  */}
                    <Text
                      numberOfLines={1}
                      ellipsizeMode={'tail'}
                      style={[styles.label, isFocused && styles.focusedTabText]}>
                      {label}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
          // <>
          //   {tabs.map(item => {
          //     const {Icon, label, screen} = item;
          //     const isActive = screen === activeTab.screen;
          //     return (
          //       <TouchableWithoutFeedback
          //         key={screen}
          //         accessibilityRole="tab"
          //         accessibilityState={isFocused ? {selected: true} : {}}
          //         accessibilityLabel={options.tabBarAccessibilityLabel}
          //         testID={options.tabBarTestID}
          //         onPress={onPress}>
          //         <View style={[styles.tab]}>
          //           {isActive && <View style={[styles.activeTabBar]} />}
          //           <Icon
          //             width={20}
          //             height={20}
          //             activeColor={
          //               isActive ? Colors.primary : Colors.phillipineGrey
          //             }
          //           />
          //           <Text
          //             numberOfLines={1}
          //             ellipsizeMode={'tail'}
          //             style={[styles.label, isActive && styles.focusedTabText]}>
          //             {label}
          //           </Text>
          //         </View>
          //       </TouchableWithoutFeedback>
          //     );
          //   })}
          // </>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    shadowColor: '#000',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingTop: 10,
  },
  label: {
    ...Fonts.poppinsTextRegular10,
    color: 'black',
    marginTop: 5,
  },
  focusedTabText: {
    color: Colors.primary,
  },
  activeTabBar: {
    borderTopWidth: hdp(0.2),
    borderTopColor: Colors.primary,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});
