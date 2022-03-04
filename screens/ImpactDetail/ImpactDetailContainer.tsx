import { View, Text } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { ImpactDetailScreenProps } from '../../navigation/types';
import { ImpactDetailContext } from './ImpactDetailContext';
import ImpactDetailView from './ImpactDetailView';

const ImpactDetailContainer: React.FC<ImpactDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const { params } = route;
  const { impactDetail } = params;
  const { backgroundColor } = impactDetail;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'left',
      headerStyle: {
        elevation: 0, // remove header border for android
        shadowOpacity: 0, // remove header border for ios
        borderBottomWidth: 0, //remove header border for ios
        backgroundColor: backgroundColor,
      },
    });
  }, [navigation]);
  return (
    <ImpactDetailContext.Provider value={{ ...impactDetail }}>
      <ImpactDetailView />
    </ImpactDetailContext.Provider>
  );
};

export default ImpactDetailContainer;
