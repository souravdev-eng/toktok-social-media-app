import React from 'react';
import {View, SafeAreaView} from 'react-native';

import {Button, SocialButton} from '../../components';
import styles from './WelcomeScreen.styles';
import Text from '../../components/ui/Text';

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
        }}>
        <View style={styles.container}>
          <Text size="h1">Welcome to TokTok</Text>
          <Text size="h5" style={{marginTop: 12}}>
            The next generation social media app
          </Text>
        </View>
        <View style={styles.socialContainer}>
          <Text size="h1">Let's you in</Text>

          <View style={{width: '90%', marginTop: 60}}>
            <SocialButton type="Apple" onPress={() => {}} />
            <SocialButton onPress={() => {}} />
            <View style={{marginTop: 30}}>
              <Button title="Sign in with password" onPress={() => {}} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
