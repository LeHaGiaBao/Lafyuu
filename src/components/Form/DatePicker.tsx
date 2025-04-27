import React, {memo, useCallback, useState} from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LFDatePickerProps, LFIcon, LFText} from '@components';
import {
  BackgroundColor,
  FontFamily,
  FontSize,
  LineHeight,
  NeutralColor,
  PrimaryColor,
} from '@constants';
import {
  daysOfWeek,
  formatDate,
  getDaysInMonth,
  getFirstDayOfMonth,
  getMonthYearHeader,
} from '@utils';

const LFDatePicker = (props: LFDatePickerProps) => {
  const {value, onChange} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value || new Date());
  const [selectedDate, setSelectedDate] = useState(value);

  // Generate calendar days
  const generateCalendarDays = useCallback(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    // Get days from previous month to fill the first row
    const daysInPrevMonth = getDaysInMonth(year, month - 1);
    const prevMonthDays = Array.from({length: firstDayOfMonth}, (_, i) => ({
      day: daysInPrevMonth - firstDayOfMonth + i + 1,
      month: month - 1,
      year,
      isCurrentMonth: false,
    }));

    // Current month days
    const currentMonthDays = Array.from({length: daysInMonth}, (_, i) => ({
      day: i + 1,
      month,
      year,
      isCurrentMonth: true,
    }));

    // Combine days
    const totalDaysToShow = 42; // 6 rows of 7 days
    const allDays = [...prevMonthDays, ...currentMonthDays];

    // Add days from next month if needed
    const nextMonthDays = Array.from(
      {length: totalDaysToShow - allDays.length},
      (_, i) => ({
        day: i + 1,
        month: month + 1,
        year,
        isCurrentMonth: false,
      }),
    );

    return [...allDays, ...nextMonthDays];
  }, [currentMonth]);

  // Navigate to previous month
  const goToPrevMonth = useCallback(() => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  }, [currentMonth]);

  // Navigate to next month
  const goToNextMonth = useCallback(() => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  }, [currentMonth]);

  // Handle date selection
  const handleDateSelect = useCallback(
    (day: number, month: number, year: number) => {
      const newDate = new Date(year, month, day);
      setSelectedDate(newDate);
      onChange(newDate);
      setModalVisible(false);
    },
    [onChange],
  );

  // Check if a date is selected
  const isDateSelected = useCallback(
    (day: number, month: number, year: number) => {
      if (!selectedDate) {
        return false;
      }

      return (
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year
      );
    },
    [selectedDate],
  );

  // Check if a date is today
  const isToday = useCallback((day: number, month: number, year: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  }, []);

  // Render days of week header
  const renderDaysOfWeek = useCallback(() => {
    return (
      <View style={styles.daysOfWeekContainer}>
        {daysOfWeek.map((day, index) => (
          <View key={index} style={styles.dayOfWeekCell}>
            <LFText.Text
              typo="CaptionLargeBold"
              color={
                index === 0 ? PrimaryColor.RedColor : NeutralColor.GreyColor
              }>
              {day}
            </LFText.Text>
          </View>
        ))}
      </View>
    );
  }, []);

  // Render calendar grid
  const renderCalendarGrid = () => {
    const days = generateCalendarDays();
    const rows = [];

    for (let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7);
      rows.push(
        <View key={i} style={styles.calendarRow}>
          {week.map((day, index) => {
            const isSelected = isDateSelected(day.day, day.month, day.year);
            const isTodayDate = isToday(day.day, day.month, day.year);

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.calendarCell,
                  isSelected && styles.selectedDateCell,
                ]}
                onPress={() => handleDateSelect(day.day, day.month, day.year)}>
                <Text
                  style={[
                    styles.calendarDayText,
                    !day.isCurrentMonth && styles.otherMonthText,
                    index === 0 && day.isCurrentMonth && styles.sundayText,
                    isSelected && styles.selectedDateText,
                    isTodayDate && styles.todayText,
                  ]}>
                  {day.day}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>,
      );
    }

    return <View style={styles.calendarGrid}>{rows}</View>;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setModalVisible(true)}>
        <TextInput
          style={styles.input}
          value={formatDate(selectedDate)}
          editable={false}
          placeholder="MM/DD/YYYY"
        />
        <LFIcon.Icon icon={'date'} size={24} />
      </TouchableOpacity>
      {/* Calendar modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}>
          <View
            style={styles.calendarContainer}
            onStartShouldSetResponder={() => true}>
            <View style={styles.calendarHeader}>
              <TouchableOpacity
                onPress={goToPrevMonth}
                style={styles.navButton}>
                <LFIcon.Icon icon={'left'} size={24} />
              </TouchableOpacity>

              <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
                {getMonthYearHeader(currentMonth)}
              </LFText.Text>

              <TouchableOpacity
                onPress={goToNextMonth}
                style={styles.navButton}>
                <LFIcon.Icon icon={'Right'} size={24} />
              </TouchableOpacity>
            </View>
            {renderDaysOfWeek()}
            {renderCalendarGrid()}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    gap: 8,
    height: 48,
    width: '100%',
    borderColor: PrimaryColor.BlueColor,
    backgroundColor: BackgroundColor.WhiteColor,
  },
  input: {
    flex: 1,
    fontSize: FontSize.FontSize12,
    fontFamily: FontFamily.FontBold,
    color: NeutralColor.GreyColor,
    letterSpacing: 0.5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: BackgroundColor.WhiteColor,
    borderRadius: 12,
    overflow: 'hidden',
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  navButton: {
    padding: 8,
  },
  daysOfWeekContainer: {
    flexDirection: 'row',
  },
  dayOfWeekCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: NeutralColor.LightColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    height: 50,
    width: 50,
  },
  calendarGrid: {
    paddingBottom: 16,
  },
  calendarRow: {
    flexDirection: 'row',
  },
  calendarCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: NeutralColor.LightColor,
    borderWidth: 1,
    paddingVertical: 8,
    height: 50,
    width: 50,
  },
  calendarDayText: {
    fontSize: FontSize.FontSize12,
    fontFamily: FontFamily.FontRegular,
    color: NeutralColor.GreyColor,
    letterSpacing: 0.5,
    lineHeight: FontSize.FontSize12 * LineHeight.LineHeight150,
  },
  otherMonthText: {
    fontSize: FontSize.FontSize12,
    fontFamily: FontFamily.FontRegular,
    color: NeutralColor.LightColor,
    letterSpacing: 0.5,
    lineHeight: FontSize.FontSize12 * LineHeight.LineHeight150,
  },
  sundayText: {
    fontSize: FontSize.FontSize12,
    fontFamily: FontFamily.FontRegular,
    color: PrimaryColor.RedColor,
    letterSpacing: 0.5,
    lineHeight: FontSize.FontSize12 * LineHeight.LineHeight150,
  },
  selectedDateCell: {
    backgroundColor: PrimaryColor.BlueColor,
  },
  selectedDateText: {
    fontSize: FontSize.FontSize12,
    fontFamily: FontFamily.FontBold,
    color: BackgroundColor.WhiteColor,
    letterSpacing: 0.5,
    lineHeight: FontSize.FontSize12 * LineHeight.LineHeight150,
  },
  todayText: {
    fontFamily: FontFamily.FontBold,
  },
});

export default memo(LFDatePicker);
