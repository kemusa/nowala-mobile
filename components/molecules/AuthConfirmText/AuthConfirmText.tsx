import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import NowalaText from '../../atoms/text';
import styles from './styles';
// import PolicyConfirmText from '../../molecules/auth/PolicyConfirmText';

const AuthConfirmText: React.FC<AuthConfirmTextProps> = ({
  isLogin,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      {/* <PolicyConfirmText /> */}
      {isLogin ? (
        <>
          <NowalaText.Subtitle2>Not a member yet? </NowalaText.Subtitle2>
          <NowalaText.LinkText onPress={onPress}>Sign up</NowalaText.LinkText>
        </>
      ) : (
        <>
          <NowalaText.Subtitle2>Already a member? </NowalaText.Subtitle2>
          <NowalaText.LinkText onPress={onPress}>Log in</NowalaText.LinkText>
        </>
      )}
    </View>
  );
};

export default AuthConfirmText;
