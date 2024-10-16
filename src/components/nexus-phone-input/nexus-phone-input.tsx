import {View, StyleSheet} from 'react-native';
import React from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {Colors, Fonts, Size} from '../../constants/constants';
import {NexusPhoneInputProps} from '../../types/components';
import * as Animatable from 'react-native-animatable';
import {hdp} from '../../utils/utility';

const NexusPhoneInput = (props: NexusPhoneInputProps) => {
  const {
    value,
    showErrorField,
    errorMessage,
    onFocus,
    onBlur,
    errorStyle,
    PhoneInputWrapperStyle,
    onChangeFormattedText,
    onChangeText,
    phoneInputRef,
    onEndEditing,
    maxLength = 20,
  } = props;

  return (
    <View style={[styles.inputWrapper, errorStyle]}>
      <PhoneInput
        ref={phoneInputRef}
        defaultValue={value}
        defaultCode="SA"
        onChangeText={(text: string) => onChangeText && onChangeText(text)}
        onChangeFormattedText={(text: string) => {
          if (phoneInputRef) {
            onChangeFormattedText?.(text, phoneInputRef);
          }
        }}
        countryPickerProps={{withAlphaFilter: true}}
        withShadow
        textContainerStyle={styles.textContainer}
        textInputStyle={styles.textInput}
        codeTextStyle={styles.codeText}
        containerStyle={[styles.container, PhoneInputWrapperStyle, errorStyle]} // Ensure borderColor is set here
        textInputProps={{
          onEndEditing: onEndEditing,
          onBlur: onBlur,
          onFocus: onFocus,
          maxLength: maxLength,
        }}
      />

      {!!showErrorField && (
        <Animatable.Text
          style={styles.errorText}
          useNativeDriver
          animation={'shake'}>
          {errorMessage}
        </Animatable.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 20,
  },
  container: {
    height: Size.nexus_textinput_height,
    backgroundColor: Colors.white,
    borderRadius: Size.nexus_textinput_height / 7,
    width: '100%',
    borderWidth: 1, // Ensure this is consistent
    borderColor: Colors.tintGrey, // This will be overridden by PhoneInputWrapperStyle
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  textContainer: {
    padding: 0,
    margin: 0,
    backgroundColor: Colors.white,
    borderRadius: Size.nexus_textinput_height / 7,
    borderWidth: 0, // Remove any border from text container
  },
  textInput: {
    textAlignVertical: 'center',
    height: Size.nexus_textinput_height,
    ...Fonts.poppinsTextMedium14,
    color: Colors.black,
    includeFontPadding: false,
    padding: 0,
  },
  codeText: {
    textAlignVertical: 'center',
    ...Fonts.poppinsTextMedium14,
    includeFontPadding: false,
    padding: 0,
    textAlign: 'left',
    right: 5,
    lineHeight: 19,
    margin: 0,
    // alignSelf: 'center',
  },
  errorText: {
    color: Colors.red,
    ...Fonts.poppinsTextSemibold14,
    marginBottom: hdp(0.2),
  },
});

export default NexusPhoneInput;
