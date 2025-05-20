import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {LFButton} from '@components';
import {REVIEW_LIST} from '@database';

interface ReviewFilterProps {
  idSelected: any;
  onPress: any;
}

function ReviewFilter(props: ReviewFilterProps) {
  const {idSelected, onPress} = props;

  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const renderItem = useCallback(
    ({item}: {item: any}) => {
      const {id, text, icon} = item;

      const isActive = id === idSelected;

      return (
        <LFButton.ButtonCheck
          id={id}
          title={text}
          icon={icon}
          isActive={isActive}
          onPress={() => onPress(id)}
        />
      );
    },
    [idSelected, onPress],
  );

  return (
    <FlatList
      horizontal
      data={REVIEW_LIST}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
    display: 'flex',
    gap: 16,
  },
});

export default memo(ReviewFilter);
