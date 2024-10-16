import {KeyboardTypeOptions, TextStyle, ViewStyle} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

export type NexusTextInputProps = {
    value?: string;
    placeholder?: string;
    rootContainerStyle?: ViewStyle;
    textInputWrapperStyle?: ViewStyle;
    textInputStyle?: TextStyle;
    keyboardType?: KeyboardTypeOptions;
    maxLength?: number | undefined;
    editable?: boolean;
    errorStyle?: ViewStyle;
    // inputLabel?: string,
    // labelStyle?: TextStyle,
    // showLabel?: boolean,
    // RightIcon?: React.FunctionComponent;
    // right_icon_color?: string;
    onChangeText?: (inputKey: string, text: string) => void;
    inputKey?: string;
    pointerEvents?: 'auto' | 'none' | 'box-none' | 'box-only' | undefined;
    // greyedOut?: boolean;
    multiline?: boolean;
    showErrorField?: boolean;
    errorMessage?: string;
    onFocus?: () => void;
    onBlur?: () => void;
  };
  
  export type NexusPhoneInputProps = {
    PhoneInputWrapperStyle?: ViewStyle;
    PhoneTextInputStyle?: TextStyle;
    onChangeText?: (text: string) => void;
    showErrorField?: boolean;
    errorMessage?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    phoneInputRef?: React.RefObject<PhoneInput>;
    countryCode?: string;
    formattedValue?: string;
    onChangeFormattedText?: (
      text: string,
      phoneInputRef: React.RefObject<PhoneInput>,
    ) => void;
    value?: string;
    errorStyle?: ViewStyle;
    onEndEditing?: () => void;
    maxLength?:number;
  };

  
// Define the type for your marker props
export type CustomMarkerProps = {
    coordinate: {
      latitude: number;
      longitude: number;
    };
    title: string;
  };
  
  export type ContactDataTypes = {
    fullName: string;
    // phoneNumber: string;
    emailAddress: string;
    message: string;
  };
  
  export type InquiryDataTypes = {
    company: string;
    contactName: string;
    streetAddress: string;
    city: string;
    country: string;
    emailAddress: string;
    phoneNumber: string;
    category: string;
    items: string;
    inquiryDetails: string;
  };
  
  export type HeaderProps = {
    title?: string;
  };
  