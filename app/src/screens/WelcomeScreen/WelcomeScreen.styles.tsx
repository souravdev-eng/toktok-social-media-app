import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialContainer: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    width: '100%',
    backgroundColor: colors.greyLight,
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textInput: {
    width: '85%',
    height: '100%',
  }
});

export default styles;
