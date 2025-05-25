import React, {memo, useCallback, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {
  LFButton,
  LFForm,
  LFNavigation,
  LFRating,
  LFText,
  LFIcon,
} from '@components';
import {BackgroundColor, Devices, NeutralColor} from '@constants';
import {useLFNavigation} from '@hooks';
import translate from '@translations/i18n';
import {launchImageLibrary} from 'react-native-image-picker';

interface MyNameFormInputs {
  review: string;
  images?: any[];
}

function WriteReview() {
  const nav = useLFNavigation();
  const review = useRef(0);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);

  const {control, handleSubmit} = useForm<MyNameFormInputs>({
    mode: 'onChange',
    defaultValues: {
      images: [],
    },
  });

  const handleAddPhoto = useCallback(async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
    });
    if (result?.assets?.[0]) {
      setSelectedImages(prev => [...prev, result?.assets?.[0]]);
    }
  }, []);

  const handleRemoveImage = useCallback((index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleSave = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <KeyboardAvoidingView
      behavior={Devices.IS_IOS ? 'padding' : 'height'}
      style={styles.myNameContainer}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <LFNavigation.HeaderCanGoBack
          name={translate('navigation:write_review')}
        />
        <View style={styles.form}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:write_review_description')}
          </LFText.Text>

          <LFRating.Star
            rating={review.current}
            ratingType="Big"
            canChange={true}
            showNumber={true}
          />
        </View>
        <View style={styles.form}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:write_your_review')}
          </LFText.Text>
          <Controller
            control={control}
            name="review"
            render={({field: {onChange, value = '', onBlur}}) => (
              <LFForm.TextArea
                value={value}
                type="Text"
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={translate('resources:write_your_review')}
              />
            )}
          />
        </View>

        <View style={styles.form}>
          <LFText.Text typo="H5" color={NeutralColor.DarkColor}>
            {translate('resources:photo')}
          </LFText.Text>
          <View style={styles.imageContainer}>
            {selectedImages.map((image, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image source={{uri: image.uri}} style={styles.image} />
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemoveImage(index)}>
                  <LFIcon.Icon icon="trash" size={16} />
                </TouchableOpacity>
              </View>
            ))}
            {selectedImages?.length !== 5 && (
              <LFButton.ButtonAdd onPress={handleAddPhoto} />
            )}
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <LFButton.Button
          onPress={handleSubmit(handleSave)}
          title={translate('resources:save')}
          type="Primary"
          size="Large"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  myNameContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.WhiteColor,
    paddingTop: Devices.headerTop,
  },
  form: {
    display: 'flex',
    padding: 16,
    gap: 12,
  },
  buttonContainer: {
    position: 'absolute',
    margin: 16,
    left: 0,
    right: 0,
    bottom: Devices.bottomButton,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 5,
  },
  removeButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: BackgroundColor.WhiteColor,
    borderRadius: 12,
    padding: 4,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default memo(WriteReview);
