import {Text as AppText, TextStyle} from 'react-native';
import React from 'react';
import theme from '../../theme';

const {fontSize} = theme;

interface TextProps {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body';
  children: React.ReactNode;
  style?: TextStyle;
}

const Text: React.FC<TextProps> = ({size = 'body', style, children}) => {
  return (
    <>
      <AppText
        style={[
          style,
          {
            fontSize: fontSize[size],
          },
        ]}>
        {children}
      </AppText>
    </>
  );
};

export default Text;
