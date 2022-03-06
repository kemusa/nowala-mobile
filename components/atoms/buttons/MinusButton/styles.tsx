import { StyleSheet } from 'react-native';
import { buttonHeight } from '../../../../utils/consts/STYLES';

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    borderColor: '#ADADAD',
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus: { width: 15, height: 2, backgroundColor: '#ADADAD' },
});

export default styles;
