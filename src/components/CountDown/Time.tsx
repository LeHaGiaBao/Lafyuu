import React, {memo, useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFCountdownProps, LFText} from '@components';
import {BackgroundColor, NeutralColor} from '@constants';

const LFTime = (props: LFCountdownProps) => {
  const {endTime} = props;

  const calculateTimeLeft = useCallback(() => {
    const difference = +endTime - +new Date();
    let timeLeft = {hours: 0, minutes: 0, seconds: 0};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [endTime]);

  const formatTime = useCallback((time: number) => {
    return time < 10 ? `0${time}` : time;
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <View style={timeStyles.timerContainer}>
      <View style={timeStyles.timerBox}>
        <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
          {formatTime(timeLeft.hours)}
        </LFText.Text>
      </View>

      <View style={timeStyles.seperator}>
        <LFText.Text typo="H5" color={BackgroundColor.WhiteColor}>
          :
        </LFText.Text>
      </View>

      <View style={timeStyles.timerBox}>
        <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
          {formatTime(timeLeft.minutes)}
        </LFText.Text>
      </View>

      <View style={timeStyles.seperator}>
        <LFText.Text typo="H5" color={BackgroundColor.WhiteColor}>
          :
        </LFText.Text>
      </View>

      <View style={timeStyles.timerBox}>
        <LFText.Text typo="H4" color={NeutralColor.DarkColor}>
          {formatTime(timeLeft.seconds)}
        </LFText.Text>
      </View>
    </View>
  );
};

const timeStyles = StyleSheet.create({
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  timerBox: {
    backgroundColor: BackgroundColor.WhiteColor,
    borderRadius: 5,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    marginHorizontal: 4,
  },
});

export default memo(LFTime);
