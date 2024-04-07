import {Text, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import theme from '../../theme';
const {colors} = theme;

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({onPress, title, style}) => {
  return (
    <TouchableOpacity
      style={[style, styles.container]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  },
});

export default Button;
