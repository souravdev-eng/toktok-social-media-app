import {StyleSheet} from 'react-native';
import theme from '../../theme';

const {colors} = theme;

const styles = StyleSheet.create({
  textInputContainer: {
    width: '100%',
    backgroundColor: '#f8f9fa',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textInputError: {
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  textInput: {
    width: '85%',
    height: '100%',
  },
});

export default styles;
