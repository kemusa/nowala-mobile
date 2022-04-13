import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icons from '../../icons';
import styles from './styles';

const MenuButton: React.FC<MenuButtonProps> = ({ onPress }) => {
  const toggleDrawer = () => {
    //Props to open/close the drawer
    // props.navigationProps.toggleDrawer();
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      onPress={onPress}>
      <Icons.HamburgerMenu />
    </TouchableOpacity>
  );
};

export default MenuButton;
