import 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import NowalaIcon from '../components/atoms/icons/NowalaIcon';

const iconHeader: Partial<StackNavigationOptions> = {
  headerTitle: () => <NowalaIcon />,
  headerTitleAlign: 'center',
  headerStyle: {
    elevation: 0, // remove header border for android
    shadowOpacity: 0, // remove header border for ios
    borderBottomWidth: 0, //remove header border for ios
  },
};

export { iconHeader };
