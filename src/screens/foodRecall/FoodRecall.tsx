import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header/Header';
import AccentButton from '../../components/accenButton/AccentButton';
import DialogueBox from '../../components/dialogueBox/DialogueBox';
import {Colors, Fonts} from '../../utility/constants';
import DownArrow from '../../assets/svg/downarrow';
import DropDownArrow from '../../assets/svg/dropdownarrow';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import AddBtnIcon from '../../assets/svg/addBtnIcon';
import TimePicker from '../../components/timePicker/TimePicker';
import DatePicker from 'react-native-date-picker';

const FoodRecall = () => {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const [menuItems, setMenuItems] = useState([
    ['', ''], // Breakfast (2 items)
    [''], // Mid-morning (1 item)
    ['', ''], // Lunch (2 items)
    [''], // Late evening (1 item)
    ['', ''], // Dinner (2 items)
  ]);

  const handlePress = section => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  const handleAddMore = section => {
    setShowTimePicker(true);
    // Optionally add new items logic here if needed
  };

  const closeModal = () => {
    setShowTimePicker(false);
  };

  const [date, setDate] = useState(new Date());

  const onConfirm = (date: Date) => {
    const formattedTime = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log(formattedTime, 'Selected Time'); // This will print something like "12:30 PM"
    setDate(date); // You can still store the original Date object if needed
    closeModal();
  };
  

  const placeholderMap = [
    ['eg. Upma + Apple juice', 'eg. Idli + Sambar'], // Breakfast
    ['eg. Oatmeal + Banana'], // Mid-morning
    ['eg. Roti + Sabji', 'eg. Rice + Fish'], // Lunch
    ['eg. Strawberries + Chocolate'], // Late evening
    ['eg. Roti + Paneer korma', 'eg. Vegetable curry + Chapati'], // Dinner
  ];


  const renderSection = (title, index) => {
    const isOpen = expandedSection === index;
    const height = useSharedValue(
      isOpen ? (index === 1 || index === 3 ? 120 : 200) : 0,
    );
    const maxHeight = index === 1 || index === 3 ? 120 : 200;

    const rStyle = useAnimatedStyle(() => ({
      height: height.value,
      overflow: 'hidden',
    }));

    const reanimatedDropdownStyle = useAnimatedStyle(() => ({
      opacity: interpolate(height.value, [0, maxHeight], [1, 0]),
    }));

    height.value = withTiming(isOpen ? maxHeight : 0);

    return (
      <Animated.View style={styles.card} key={index}>
        <TouchableOpacity
          onPress={() => handlePress(index)}
          style={styles.container}>
          <Text style={styles.titleText}>{title}</Text>
          <Animated.View style={reanimatedDropdownStyle}>
            <DropDownArrow />
          </Animated.View>
        </TouchableOpacity>

        <Animated.View style={rStyle}>
          <View style={styles.timeRow}>
            <Text style={styles.labelText}>{'Time:'}</Text>
            <View style={styles.timeInputWrapper}>
              <Text style={styles.placeholderText}>{'Select time'}</Text>
              <DownArrow style={styles.iconPadding} />
            </View>
          </View>

          <View style={styles.menuSection}>
            <Text style={styles.menuTitle}>{'Menu options:'}</Text>
            {menuItems[index].map((item, itemIndex) => (
              <View style={styles.inputRow} key={itemIndex}>
                {(index === 0 || index === 2 || index === 4) && ( // Breakfast, Lunch, Dinner
                  <Text style={styles.bulletText}>{itemIndex + 1}.</Text>
                )}
                <TextInput
                  placeholder={
                    placeholderMap[index][itemIndex] ||
                    `eg. Item ${itemIndex + 1}`
                  }
                  style={styles.input}
                  value={item}
                  onChangeText={text => {
                    const updatedItems = [...menuItems];
                    updatedItems[index][itemIndex] = text;
                    setMenuItems(updatedItems);
                  }}
                />
              </View>
            ))}
          </View>

          <View style={styles.addMoreWrapper}>
            <TouchableOpacity
              style={styles.addMoreButton}
              onPress={() => handleAddMore(index)}>
              <Text>{'Add More'}</Text>
              <AddBtnIcon />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.root}>
      <Header />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}>
        {renderSection('Breakfast*', 0)}
        {renderSection('Mid-morning', 1)}
        {renderSection('Lunch*', 2)}
        {renderSection('Late evening', 3)}
        {renderSection('Dinner*', 4)}
      </ScrollView>

      <View style={styles.bottomBtnWrapper}>
        <AccentButton />
      </View>
      <DialogueBox />
      {showTimePicker && (
        //   <DatePicker
        //   mode="time"
        //   date={date}
        //   modal
        //   open={showTimePicker}
        //   onConfirm={onConfirm}
        //   onCancel={() => {
        //     setShowTimePicker(false);
        //   }}
        //   confirmText='OK'
        //   cancelText='CANCEL'
        //   buttonColor={Colors.primary}
        // />
        <TimePicker
          isVisible={showTimePicker}
          onBackDropPress={closeModal}
          onClose={closeModal}
          date={date}
          onConfirm={onConfirm}
        />
      )}
    </View>
  );
};

export default FoodRecall;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    marginHorizontal: 20,
  },
  card: {
    borderRadius: 8,
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    ...Fonts.robotoTextBold16,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 5,
  },
  labelText: {
    ...Fonts.robotoTextBlack14,
  },
  timeInputWrapper: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    gap: 10,
  },
  placeholderText: {
    ...Fonts.robotoTextRegular14,
    color: Colors.spanishGray,
    paddingBottom: 2,
  },
  iconPadding: {
    paddingBottom: 4,
  },
  menuSection: {
    marginTop: 10,
  },
  menuTitle: {
    ...Fonts.robotoTextBlack14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  bulletText: {
    ...Fonts.robotoTextBold16,
  },
  input: {
    borderBottomWidth: 1,
    flex: 1,
    margin: 0,
    padding: 0,
    ...Fonts.robotoTextRegular14,
    paddingBottom: 2,
  },
  addMoreWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  addMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  bottomBtnWrapper: {
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
});
