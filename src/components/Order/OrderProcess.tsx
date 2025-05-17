import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {LFIcon, LFOrderProcessProps, LFText} from '@components';
import {BackgroundColor, Devices, NeutralColor, PrimaryColor} from '@constants';

const LINE_WIDTH = (Devices.width - 8) / 4;

const LFOrderProcess = (props: LFOrderProcessProps) => {
  const {steps} = props;

  return (
    <View style={styles.progressContainer}>
      {steps.map((step, index) => {
        const isLastStep = index === steps.length - 1;
        const lastCompletedStep = steps?.findIndex(sp => !sp.completed);

        return (
          <View key={step.id} style={styles.stepContainer}>
            <View
              style={[
                styles.indicator,
                {
                  backgroundColor: step.completed
                    ? PrimaryColor.BlueColor
                    : NeutralColor.LightColor,
                },
              ]}>
              <LFIcon.Icon icon="tick" size={12} />
            </View>

            {!isLastStep && (
              <View
                style={[
                  styles.line,
                  {
                    backgroundColor:
                      step.completed && index === lastCompletedStep - 1
                        ? NeutralColor.LightColor
                        : PrimaryColor.BlueColor,
                  },
                ]}
              />
            )}

            <LFText.Text
              typo="BodyNormalRegular"
              color={NeutralColor.GreyColor}>
              {step?.label}
            </LFText.Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    backgroundColor: BackgroundColor.WhiteColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  stepContainer: {
    marginTop: 8,
    alignItems: 'center',
    position: 'relative',
  },
  indicator: {
    width: 24,
    height: 24,
    borderRadius: 100,
    marginBottom: 10,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    width: LINE_WIDTH,
    height: 2,
    top: 12,
    left: 24,
    zIndex: 1,
  },
});

export default memo(LFOrderProcess);
