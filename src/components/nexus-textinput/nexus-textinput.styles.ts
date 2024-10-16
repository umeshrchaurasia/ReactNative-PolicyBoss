import {StyleSheet} from 'react-native';
import {hdp, wdp} from '../../utility/utility';
import {Colors, Fonts, Size, Spacing} from '../../utility/constants';

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    // marginVertical: Spacing.textinput_vertical,
    // marginTop: Spacing.textinput_vertical,
    marginBottom:Spacing.textinput_vertical
  },
  textInputWrapper: {
    height: Size.nexus_textinput_height,
    backgroundColor: Colors.white,
    borderRadius: Size.nexus_textinput_height / 7,
    width: '100%',
    // paddingHorizontal: 15,
    // flex: 1,
    borderColor: Colors.tintGrey,
    borderWidth: 0.9,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
   
            //   padding: 15,
            // flex: 1,
            
  },
  textInput: {
    width: '100%',
    height: '100%',
    ...Fonts.poppinsTextMedium14,
    color: Colors.black,
    // flex: 1,
    includeFontPadding: false,
    padding: 15,
    textAlignVertical: 'center',
  
    // paddingHorizontal: wdp(5),
    // paddingVertical: hdp(2),
    // textAlign: isRTL() ? "right" : "left"
  },
  label: {
    ...Fonts.poppinsTextBold12,
    color: Colors.black,
    marginLeft: wdp(2),
  },
  greyStyle: {
    opacity: 0.3,
  },
  errorText: {
    color: Colors.red,
    ...Fonts.poppinsTextSemibold14,
    paddingTop: hdp(0.4),
    textAlign:"left",
    // paddingBottom: Spacing.textinput_vertical,
    // borderWidth:1
  },
});

export default styles;
