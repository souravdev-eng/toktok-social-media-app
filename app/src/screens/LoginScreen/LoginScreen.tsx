import {
  View,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from '../../components';
import theme from '../../theme';
const {colors} = theme;

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 20}}>
        <View style={{width: '40%'}}>
          <Text size="h1">Login to your Account</Text>
        </View>

        <View>
          <View
            style={{
              width: '100%',
              backgroundColor: colors.greyLight,
              height: 50,
              borderRadius: 12,
              paddingHorizontal: 10,
              marginVertical: 16,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <MaterialCommunityIcon
              name="email"
              size={20}
              style={{color: colors.grey}}
            />
            <TextInput
              style={{
                width: '85%',
                height: '100%',
              }}
              autoCapitalize="none"
              placeholder="Email"
              // value=""
              // onChangeText={text => console.log('text')}
              // keyboardType="email-address"
              // keyboardAppearance="default"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
