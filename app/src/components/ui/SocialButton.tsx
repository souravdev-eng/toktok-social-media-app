import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {IMAGE} from '../../assets';
import theme from '../../theme';

const {colors} = theme;

interface SocialButtonProps {
  type?: 'Google' | 'Apple';
  onPress: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  type = 'Google',
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.socialButton} onPress={onPress}>
      <Image
        source={type === 'Apple' ? IMAGE.Apple : IMAGE.Google}
        style={{height: 35, width: 35}}
      />
      <Text style={styles.buttonText}>{`Continue with ${
        type === 'Apple' ? 'Apple' : 'Google'
      }`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.greyLight,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    gap: 20,
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
});

export default SocialButton;
