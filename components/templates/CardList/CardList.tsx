import { View } from 'react-native';
import React from 'react';

const CardList: React.FC<CardList> = ({ list }) => {
  return (
    <>
      {list.map((item, idx) => (
        <View key={idx}>
          {item}
          {list.length != idx + 1 && <View style={{ marginBottom: 15 }}></View>}
        </View>
      ))}
    </>
  );
};

export default CardList;
