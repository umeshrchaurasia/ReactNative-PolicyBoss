import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../utility/constants';
import {RectButton} from 'react-native-gesture-handler';
import BackArrow from '../../assets/svg/backarrow';
import SupportIcon from '../../assets/svg/supportIcon';

const Header = () => {
  return (
    <>
      <View style={styles.root}>
        <RectButton style={styles.backBtnStyle}>
          <BackArrow />
        </RectButton>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Food Recall Details</Text>
        </View>
        <RectButton style={styles.backBtnStyle}>
          <SupportIcon />
        </RectButton>
      </View>
      <View style={styles.headerDesc}>
        <Text style={styles.desc}>
          {
            'Please tell us about the meals that you eat on a day-to-day basis. Mention a variety of options & not just one.'
          }
        </Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  title: {
    ...Fonts.robotoTextMedium20,
    color: Colors.indigo,
  },
  backBtnStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerDesc: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  desc: {
    color: Colors.black,
    ...Fonts.robotoTextMedium16,
    textAlign: 'center',
  },
});
