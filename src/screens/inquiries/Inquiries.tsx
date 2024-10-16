import {
    StyleSheet, Text, View, FlatList,
    ImageBackground, TouchableOpacity,
} from 'react-native'
import React from 'react'
import { Colors, Fonts, Size } from '../../utility/constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import { hdp, wdp } from '../../utility/utility';

import { userInquiries } from './inquiries.hooks'
import NexusTextInput from '../../components/nexus-textinput/nexus-textinput';
import NexusPhoneInput from '../../components/nexus-phone-input/nexus-phone-input';

const Inquiries = () => {

    const {
        contactData,
        error,
        getWrapperStyle,
        handleBlur,
        handleFocus,
        onChangeText,
        onSubmit,
        showEmailError,
        showCountryError,
        showPhoneNumberError,
        countryCode,
        formattedValue,
        onChangeFormattedText,
        onChangePhoneNumber,
        phoneInputRef,
    } = userInquiries();

    const renderItem = () => {
        return (
            <View style={[styles.container]}>

                <NexusTextInput
                    inputKey='company'
                    value={contactData.company}
                    onChangeText={onChangeText}
                    onFocus={() => handleFocus('company')}
                    onBlur={() => handleBlur('company')}
                    keyboardType='default'
                    placeholder='Company'
                    textInputWrapperStyle={getWrapperStyle('company')}
                />
                <NexusTextInput
                    inputKey='contactName'
                    value={contactData.contactName}
                    onChangeText={onChangeText}
                    onFocus={() => handleFocus('contactName')}
                    onBlur={() => handleBlur('contactName')}
                    keyboardType='default'
                    placeholder='contactName'
                    textInputWrapperStyle={getWrapperStyle('company')}
                />


                <NexusTextInput
                    inputKey="streetAddress"
                    value={contactData.streetAddress}
                    // maxLength={15}
                    onChangeText={onChangeText}
                    onFocus={() => handleFocus('streetAddress')}
                    onBlur={() => handleBlur('streetAddress')}
                    keyboardType="default"
                    placeholder="Street Address"
                    textInputWrapperStyle={getWrapperStyle('streetAddress')}
                />
                <NexusTextInput
                    inputKey="city"
                    value={contactData.city}
                    // maxLength={15}
                    onChangeText={onChangeText}
                    onFocus={() => handleFocus('city')}
                    onBlur={() => handleBlur('city')}
                    keyboardType="default"
                    placeholder="City"
                    textInputWrapperStyle={getWrapperStyle('city')}
                />

                <NexusTextInput
                    inputKey="country"
                    value={contactData.country}
                    // maxLength={15}
                    onChangeText={onChangeText}
                    onFocus={() => handleFocus('country')}
                    onBlur={() => handleBlur('country')}
                    keyboardType="default"
                    placeholder="Country*"
                    textInputWrapperStyle={getWrapperStyle('country')}
                    errorStyle={showCountryError ? styles.errorMessageStyle : {}}
                    showErrorField={showCountryError}
                    errorMessage={error.country}
                />

                <NexusTextInput
                    inputKey="emailAddress"
                    value={contactData.emailAddress}
                    onChangeText={onChangeText}
                    onFocus={() => handleFocus('emailAddress')}
                    onBlur={() => handleBlur('emailAddress')}
                    keyboardType="email-address"
                    placeholder="Email Address*"
                    textInputWrapperStyle={getWrapperStyle('emailAddress')}
                    errorStyle={showEmailError ? styles.errorMessageStyle : {}}
                    showErrorField={showEmailError}
                    errorMessage={error.emailAddress}
                />
                <NexusPhoneInput
                    value={contactData.phoneNumber}
                    formattedValue={formattedValue}
                    onChangeFormattedText={onChangeFormattedText}
                    onChangeText={onChangePhoneNumber}
                    phoneInputRef={phoneInputRef}
                    onFocus={() => handleFocus('phoneNumber')}
                    onBlur={() => handleBlur('phoneNumber')}
                    // onEndEditing={onEndEditing}
                    PhoneInputWrapperStyle={getWrapperStyle('phoneNumber')}
                    errorStyle={showPhoneNumberError ? styles.phoneErroStyle : {}}
                    showErrorField={showPhoneNumberError}
                    errorMessage={error.phoneNumber}
                    maxLength={20}
                />
                <NexusTextInput
                    inputKey="items"
                    value={contactData.items}
                    onChangeText={onChangeText}
                    // maxLength={30}
                    onFocus={() => handleFocus('items')}
                    onBlur={() => handleBlur('items')}
                    keyboardType="default"
                    placeholder="Items"
                    textInputWrapperStyle={getWrapperStyle('items')}
                />
                <NexusTextInput
                    inputKey="inquiryDetails"
                    value={contactData.inquiryDetails}
                    onChangeText={onChangeText}
                    onFocus={() => handleFocus('inquiryDetails')}
                    onBlur={() => handleBlur('inquiryDetails')}
                    keyboardType="default"
                    placeholder="Inquiry Details"
                    multiline
                    textInputStyle={styles.multiLineTextInput}
                    textInputWrapperStyle={{
                        ...styles.multiLineInputWrapper,
                        ...getWrapperStyle('inquiryDetails'), // Spread the style object
                    }}
                />

                <TouchableOpacity
                onPress={onSubmit} style={styles.submitBtn}>
                    <Text style={styles.submitText}>{'Submit'}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const headerContact = () => {
        return (
            <ImageBackground
                source={require('../../assets/images/contact-us.jpg')}
                resizeMode='cover'
                style={styles.headerImageBackground}>
                <Text style={styles.text}>{'Inquiries'}</Text>
            </ImageBackground>
        );
    };

    return (
        <View style={styles.root}>
            <FlatList
                data={[1]}
                keyExtractor={item => String(item)}
                contentContainerStyle={styles.main}
                renderItem={renderItem}
                ListHeaderComponent={headerContact}
                initialNumToRender={1}
                maxToRenderPerBatch={1}
                removeClippedSubviews={true}>

            </FlatList>

        </View>
    )
}

export default Inquiries

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    main: {
        flexGrow: 1,
        paddingBottom: 90,
    },
    container: {
        flex: 1,
        // paddingHorizontal: wdp(4),
        paddingTop: hdp(4),
    },
    textWrapper:
    {
        paddingTop: 0,
    }, errorMessageStyle: {
        borderWidth: 0.9,
        borderColor: Colors.red,
    },
    multiLineTextInput: {
        textAlignVertical: 'top',
    },
    multiLineInputWrapper: {
        minHeight: 110
    },

    submitText: {
        color: Colors.white,
        ...Fonts.poppinsTextBold14,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    submitBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 8,
        padding: 10,
        width: '60%',
        height: Size.nexus_button_height,
        marginVertical: hdp(5),
        marginBottom: hdp(5),
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        alignSelf: 'center',
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },
    phoneErroStyle: {
        borderColor: Colors.red,
        textAlign: 'left',
        marginBottom: 10,
    },
    headerImageBackground: {
        justifyContent: 'center',
        paddingTop: Math.round(hdp(14.6)),
        paddingBottom: Math.round(hdp(14.6)),
    },
    text: {
        color: Colors.white,
        ...Fonts.poppinsTextBold38,
        textAlign: 'center',
    }
})