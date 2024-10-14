import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Colors, Fonts} from '../../utility/constants';

interface DialogueBoxProps {
  animationIn?: string;
  animationOut?: string;
  onClose?: () => void;
  isVisible?: boolean;
  rightBtnText?: string;
  message?: string;
  onCancelButton?: () => void;

  title?: string;
  numberOfLines?: number;
  onDangerButton?: () => void;
  showLeftBtn?: boolean;
  showRightBtn?: boolean;
  showIcon?: boolean;
  Icon?: React.FC;
  showContactSupport?: boolean;
  onBackDropPress?: () => void;
  rightBtnLoader?: boolean;
  rightBtnLoaderColor?: string;
}

const DialogueBox = (props: DialogueBoxProps) => {
  const {
    title,
    onCancelButton,
    onClose = () => null,
    onBackDropPress = () => null,
    isVisible = false,
    numberOfLines,
    message,
    onDangerButton,
    showLeftBtn = true,
    showRightBtn = true,
    showIcon = false,
    showContactSupport = false,
    rightBtnLoader = false,
  } = props;

  const handleBackdropPress = () => {
    onBackDropPress();
    onClose();
  };

  return (
    <Modal
      pointerEvents={isVisible ? 'auto' : 'none'}
      backdropOpacity={0.3}
      useNativeDriver
      useNativeDriverForBackdrop
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      style={[styles.root]}
      onBackButtonPress={onClose}
      onBackdropPress={handleBackdropPress}
      hardwareAccelerated
      onDismiss={onClose}
      isVisible={isVisible}>
      <View style={styles.dialogueBox}>
        <View style={[styles.textWrapper]}>
          <Text style={[styles.commonTitle]}>{'Note!'}</Text>
          <Text style={[styles.messageText]}>
            {
              'In case you eat out or carry meals to office, do mention those in your recall too'
            }
          </Text>
        </View>

        {showContactSupport && (
          <View style={styles.contactSupportContainer}>
            <Text style={styles.contactSupportText}>
              {/* {t('common.contactSupport')} */}
            </Text>
            <Text style={styles.fastenVerificationText}>
              {/* {t('common.fastenVerification')} */}
            </Text>
          </View>
        )}

        <View style={styles.btnRowContainer}>
          <TouchableOpacity
            disabled={rightBtnLoader}
            onPress={onCancelButton}
            style={[styles.commonBtnStyle]}>
            <Text numberOfLines={1} style={[styles.commonBtnText]}>
              {'Ok'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DialogueBox;

const styles = StyleSheet.create({
  root: {
    margin: 0,
  },
  dialogueBox: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingVertical: 20,
    marginHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  commonTitle: {
    textAlign: 'center',
    paddingBottom: 10,
    color: Colors.black,
    ...Fonts.robotoTextBold16,
  },
  messageText: {
    color: Colors.black,
    // paddingBottom: 10,
    paddingHorizontal:25,
    textAlign: 'center',
    ...Fonts.robotoTextMedium15,
  },
  btnRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 51,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
    //   marginHorizontal: 10,
    borderRadius: 25,
  },
  commonBtnText: {
    color: Colors.white,
    ...Fonts.robotoTextBold16,
  },
  textWrapper: {
    paddingBottom: 20,
  },
  focusedStyle: {
    //   backgroundColor: Colors.platinum,
  },
  outOfFocusedStyle: {
    //   backgroundColor: Colors.green,
  },
  focusedText: {
    color: Colors.black,
  },
  outOfFocusedText: {
    color: Colors.white,
  },
  iconWrapper: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  contactSupportContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    //   backgroundColor: Colors.pastelRed,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  contactSupportText: {
    marginBottom: 5,
    color: Colors.white,
    includeFontPadding: false,
    padding: 0,
    ...Fonts.robotoTextMedium16,
  },
  fastenVerificationText: {
    marginBottom: 5,
    color: Colors.white,
    includeFontPadding: false,
    padding: 0,
    ...Fonts.robotoTextMedium16,
  },
});
