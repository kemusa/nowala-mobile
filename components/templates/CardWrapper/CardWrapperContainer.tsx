import React from 'react';
import { View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import CardDetailsButton from '../../molecules/CardDetailsButton';
import styles from './styles';

const CardWrapperContainer: React.FC<CardProps> = ({ children }) => {
  return (
    <View style={{ margin: '1%' }}>
      <Shadow
        distance={2}
        startColor={'#00000020'}
        viewStyle={{ width: '100%' }}
        containerViewStyle={styles.container}
        offset={[0, 1]}
        radius={8}>
        <View
          style={[
            {
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 8,
            },
          ]}>
          {children}
        </View>
      </Shadow>
    </View>
  );
};

export default CardWrapperContainer;
