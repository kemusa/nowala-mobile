import { View, Text } from 'react-native';
import React from 'react';

const ItemLongList: React.FC<ItemLongList> = ({ list }) => {
  return (
    <>
      {list.map((item, idx) => (
        <View key={idx}>
          {item}
          {list.length != idx + 1 && (
            <>
              <View style={{ marginBottom: 10 }}></View>
              <View
                style={{
                  borderBottomColor: '#DED8D8',
                  width: '100%',
                  borderBottomWidth: 1,
                }}></View>
              <View style={{ marginBottom: 10 }}></View>
            </>
          )}
        </View>
      ))}
    </>
  );
};

export default ItemLongList;
