import React from 'react';
import { View, Text } from 'react-native';
import CheckListItemView from './CheckListItemView';

const CheckListItemContainer: React.FC<CheckListItemProps> = props => {
  return <CheckListItemView {...props} />;
};

export default CheckListItemContainer;
