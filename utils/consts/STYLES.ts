import { ViewStyle } from 'react-native';

const screenPadding = 18;
const buttonHeight = 42;
const doubleButtonHeight = buttonHeight * 3 + 30;

const buttonContainer: ViewStyle = {
  height: buttonHeight,
  position: 'absolute',
  bottom: 30,
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 70,
  width: '100%',
};

const doubleButtonContainer: ViewStyle = {
  height: doubleButtonHeight,
  position: 'absolute',
  bottom: 30,
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 70,
  width: '100%',
};

export { screenPadding, buttonHeight, buttonContainer, doubleButtonContainer };
