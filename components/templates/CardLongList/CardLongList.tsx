import { View, Text } from 'react-native';
import React from 'react';
import colors from '../../../theme/colors';
import styles from './styles';

const CardLongList: React.FC<CardLongList> = ({ list }) => {
  const { NW_GREY_2 } = colors;
  return (
    <>
      {list.map((item, idx) => (
        <View key={idx}>
          {item}
          {list.length != idx + 1 && (
            <>
              <View style={{ marginBottom: 10 }}></View>
              <View style={styles.border}></View>
              <View style={{ marginBottom: 10 }}></View>
            </>
          )}
        </View>
      ))}
    </>
  );
};

export default CardLongList;
