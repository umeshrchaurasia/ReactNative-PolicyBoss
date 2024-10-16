import { useRef, useState } from "react";
import { Colors, regex } from '../../utility/constants'
import { InquiryDataTypes } from '../../types/components'
import PhoneInput from "react-native-phone-number-input";


const userInquiries = () => {

    const [focus, setFocus] = useState({
        company: false,
        contactName: false,
        streetAddress: false,
        city: false,
        country: false,
        emailAddress: false,
        phoneNumber: false,
        category: false,
        items: false,
        inquiryDetails: false,
    });

    const [contactData, setContactData] = useState({
        company: '',
        contactName: '',
        streetAddress: '',
        city: '',
        country: '',
        emailAddress: '',
        phoneNumber: '',
        category: '',
        items: '',
        inquiryDetails: '',
    });

    const [error, setError] = useState({
        company: '',
        contactName: '',
        streetAddress: '',
        city: '',
        country: '',
        emailAddress: '',
        phoneNumber: '',
        category: '',
        items: '',
        inquiryDetails: '',
    });


    const [startFormValidation, setStartFormValidation] = useState(false);
    const phoneInputRef = useRef<PhoneInput>(null);
    const [countryCode, setCountryCode] = useState('');
    const [formattedValue, setFormattedValue] = useState('');

    const onChangeFormattedText = (
        text: string,
        phoneInputRef: React.RefObject<PhoneInput>,
    ) => {
        setFormattedValue(text);
        setCountryCode(phoneInputRef.current?.getCountryCode() || '');
    };

    const onChangePhoneNumber = (text: string) =>
        setContactData({ ...contactData, phoneNumber: text });

    const onEndEditing = () => {
        const checkValid = phoneInputRef.current?.isValidNumber(
            contactData.phoneNumber,
        );
        // setShowMessage(true);
        setCountryCode(phoneInputRef.current?.getCountryCode() || '');
        let getNumberAfterPossiblyEliminatingZero =
            phoneInputRef.current?.getNumberAfterPossiblyEliminatingZero();
        // console.log(getNumberAfterPossiblyEliminatingZero, 'zero one');
    };



    const showCountryError =
        !!error.country && startFormValidation ? true : false;

    const showPhoneNumberError =
        !!error.phoneNumber && startFormValidation ? true : false;

    const showEmailError =
        !!error.emailAddress && startFormValidation ? true : false;

    const onSubmit = () => {
        const canMakeNetworkRequest = handleFormValidation();
        if (!canMakeNetworkRequest) return;
    }

    const handleFormValidation = () => {
        let isValid = true;
        const { country, phoneNumber, emailAddress } = contactData;
        const cloneError = Object.assign({}, error);


        if (!country) {
            isValid = false;
            cloneError.country = 'Please provide your country name';
        } else if (!regex.fullName.test(country)) {
            isValid = false;
            cloneError.country = 'Please enter a valid name';
        } else if (country.length > 25) {
            isValid = false;
            cloneError.country = 'Name can only contact maximum 25 characters';
        } else {
            cloneError.country = '';
        }


        if (!phoneNumber) {
            isValid = false;
            cloneError.phoneNumber = 'Please provide phone name';
        } else if (!phoneInputRef.current?.isValidNumber(phoneNumber)) {
            isValid = false;
            cloneError.phoneNumber = 'Please enter a valid phone number';
        }
        else {
            cloneError.phoneNumber = '';
        }

        if (!emailAddress) {
            isValid = false;
            cloneError.emailAddress = 'Please provide email address';
        } else if (!regex.emailAddress.test(emailAddress)) {
            isValid = false;
            cloneError.emailAddress = 'Please enter a valid email address';
        } else {
            cloneError.emailAddress = '';
        }

        setStartFormValidation(true);
        setError(cloneError);

        return isValid;

    };

    const onChangeText = (inputKey: string, text: string) => {
        setContactData((prevState: InquiryDataTypes) => ({
            ...prevState,
            [inputKey]: text,
        }));

    };

    const handleFocus = (field: keyof typeof focus) => {
        setFocus(prevState => ({
            ...prevState,
            [field]: true,
        }));
    };

    const handleBlur = (field: keyof typeof focus) => {
        setFocus(prevState => ({
            ...prevState,
            [field]: false,
        }));
    }

    const getWrapperStyle = (field: keyof typeof focus) => ({
        borderColor: focus[field] ? Colors.primary : Colors.tintGrey,
        ...(focus[field] && { shadowColor: Colors.primary }), // conditionally add shadowColor
    });

    return {
        getWrapperStyle,
        handleBlur,
        handleFocus,
        onChangeText,
        contactData,
        onSubmit,
        showCountryError,
        showPhoneNumberError,
        showEmailError,
        error,
        onChangePhoneNumber,
        onChangeFormattedText,
        formattedValue,
        countryCode,
        phoneInputRef
    }
}
export { userInquiries };

