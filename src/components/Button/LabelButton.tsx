import React, {memo} from 'react';
import {LabelButtonProps} from '@types';
import {StyleSheet, TouchableOpacity} from 'react-native';
import CaptionText from '@components/Typography/CaptionText';
import {BackgroundColor, NeutralColor} from '@constants';
import StarSvgIcon from '@assets/Star/ActiveStar.svg';

function LabelButton(props: LabelButtonProps) {
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                    backgroundColor: props.isActive
                        ? 'rgba(64, 191, 255, 0.1)'
                        : BackgroundColor.WhiteColor,
                    borderColor: props.isActive ? '' : NeutralColor.LightColor,
                    borderWidth: props.isActive ? 0 : 1,
                },
            ]}
            onPress={props.onPress}
            onLongPress={props.onLongPress}>
            {props.icon && <StarSvgIcon width={16} height={16} />}
            <CaptionText
                text={props.text}
                size="Large"
                color={props.isActive ? 'Blue' : 'Grey'}
                family={props.isActive ? 'Bold' : 'Regular'}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 57,
        borderRadius: 5,
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
    },
});

export default memo(LabelButton);
