import {TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utility/constants';
import {NexusTextInputProps} from '../../types/components';
import styles from './nexus-textinput.styles';
import * as Animatable from 'react-native-animatable';

const NexusTextInput = (props: NexusTextInputProps) => {
  const {
    value,
    placeholder,
    textInputStyle,
    textInputWrapperStyle,
    keyboardType,
    maxLength,
    editable,
    onChangeText,
    inputKey = '',
    pointerEvents,
    multiline,
    showErrorField,
    errorMessage,
    onFocus,
    onBlur,
    errorStyle,
  } = props;
  return (
    // <React.Fragment>
    <View style={[styles.rootContainer,textInputWrapperStyle,]}>
      <View
        style={[styles.textInputWrapper, textInputWrapperStyle, errorStyle]}>
        <TextInput
          style={[styles.textInput, textInputStyle]}
          value={value}
          placeholder={placeholder}
          editable={editable}
          placeholderTextColor={Colors.lineSeparator}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onChangeText={(text: string) =>
            onChangeText && onChangeText(inputKey, text)
          }
          pointerEvents={pointerEvents}
          multiline={multiline}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        
      </View>
      {!!showErrorField && (
          <Animatable.Text
            style={[styles.errorText]}
            useNativeDriver
            animation={'shake'}>
            {errorMessage}
          </Animatable.Text>
        )}
    </View>
    // </React.Fragment>
  );
};

export default NexusTextInput;
