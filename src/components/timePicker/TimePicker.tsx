import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {Colors, Fonts} from '../../utility/constants';
import DatePicker from 'react-native-date-picker';

interface TimePickerProps {
  onClose?: () => void;
  isVisible: boolean;
  rightBtnText?: string;
  onCancelButton?: () => void;
  onDangerButton?: () => void;
  onBackDropPress?: () => void;
  date?: Date;
  onConfirm: (Date: Date) => void;
 
}

const TimePicker = (props: TimePickerProps) => {
  const {
    onCancelButton,
    onClose = () => null,
    onBackDropPress = () => null,
    isVisible = false,
    onDangerButton,
    onConfirm = (Date: Date) => null,
    date=new Date(), // Passed in prop
   
  } = props;

  const [state, setState] = useState("idle")
  
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
        <DatePicker
          mode="time"
          open={isVisible}
          date={date} // Correctly using selected date for the picker
          buttonColor={Colors.black}
          dividerColor={Colors.darkSilver}
          style={{padding: 0, margin: 0, alignSelf: 'center'}}
          onDateChange={(date)=>{
            onConfirm(date)
          }}
          onStateChange={setState}
        />
        <View style={styles.btnStyle}>
          <TouchableOpacity disabled={state === "spinning"} onPress={onClose}>
            <Text style={styles.cancelBtn}>{'CANCEL'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // Use the selected date (which has been updated when the user selects a time)
              console.log(
                'onPress Time:',
                date.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                }),
              );
              onConfirm(date) // Pass the selected date back to the parent
            }}>
            <Text style={styles.okBtn}>{'OK'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  root: {
    margin: 0,
  },
  dialogueBox: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingVertical: 20,
    marginHorizontal: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  okBtn: {
    color: Colors.primary,
    ...Fonts.robotoTextMedium14,
  },
  cancelBtn: {
    color: Colors.auroMetalSaurus,
    ...Fonts.robotoTextMedium14,
  },
  btnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 5,
    gap: 10,
  },
});
