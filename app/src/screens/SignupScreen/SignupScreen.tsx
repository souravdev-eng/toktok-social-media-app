import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../../theme';
import {Button, Text} from '../../components';
import styles from './SignupScreen.styles';
import {IMAGE} from '../../assets';

const {colors} = theme;

const SignupScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(true);

  const handlePassword = (text: string) => {
    setPassword(text);
    if (password.length > 4) {
      setPasswordError(false);
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: 'white',
          height: '100%',
        }}>
        <View style={{width: '40%', marginTop: 30}}>
          <Text size="h1" style={{fontWeight: '600'}}>
            Create your Account
          </Text>
        </View>
        <View style={{top: 50}}>
          <View>
            <View style={styles.textInputContainer}>
              <MaterialCommunityIcon
                name="email"
                size={20}
                style={{color: email !== '' ? colors.black : colors.grey}}
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
              />
            </View>
            <View
              style={[
                styles.textInputContainer,
                password.length > 1 && passwordError && styles.textInputError,
              ]}>
              <MaterialCommunityIcon
                name="lock"
                size={20}
                style={{
                  color:
                    password.length > 1 && passwordError
                      ? colors.primary
                      : password !== ''
                      ? colors.black
                      : colors.grey,
                }}
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Password"
                value={password}
                onChangeText={handlePassword}
                secureTextEntry
              />
            </View>
          </View>
          <Button
            title="Sign up"
            onPress={() => {}}
            style={{marginTop: 25, marginBottom: 12}}
          />

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
              flexDirection: 'row',
              gap: 10,
            }}>
            <View
              style={{borderWidth: 0.5, width: 100, borderColor: colors.grey}}
            />
            <Text size="h4" style={{color: colors.greyDark}}>
              or continue with
            </Text>
            <View
              style={{borderWidth: 0.5, width: 100, borderColor: colors.grey}}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 18,
              justifyContent: 'center',
              marginVertical: 18,
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: colors.grey,
                width: 80,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Image source={IMAGE.Google} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: colors.grey,
                width: 80,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Image source={IMAGE.Apple} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: colors.grey,
                width: 80,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Image source={IMAGE.Apple} style={{width: 30, height: 30}} />
            </TouchableOpacity>
          </View>

          <View>
            <Text
              size="h5"
              style={{
                color: colors.grey,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Already have an account?{' '}
              <TouchableWithoutFeedback>
                <Text
                  size="h5"
                  style={{
                    color: colors.primaryDark,
                    marginTop: 2,
                  }}>
                  Sign in
                </Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
