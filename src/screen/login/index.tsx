import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppInput } from '../../common/app-input';
import { AppButton } from '../../common/app-button';
import { theme } from '../../theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParams, AppStackParamsList } from '../../navigation/type';

type Navigation = NativeStackNavigationProp<AppStackParamsList, AppStackParams>;

export default function Login({ navigation }: { navigation: Navigation }) {
  return (
    <View style={{ marginTop: 40 }}>
      <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '700', marginBottom: 20 }}>
        ADD LOGO
      </Text>
      <AppInput placeholder="Username" rightIconName="user" />
      <AppInput placeholder="ID" rightIconName="idcard" />
      <AppInput placeholder="Password" secureTextEntry={true} rightIconName="lock1" />
      <Pressable onPress={() => navigation.navigate(AppStackParams.register)}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 20,
            marginBottom: -10,
            color: theme.colors.darkGray,
          }}>
          if you don't have account
          <Text style={{ color: theme.colors.primary, fontWeight: '600' }}> Register</Text>
        </Text>
      </Pressable>
      <AppButton title="Login" onPress={() => navigation.navigate(AppStackParams.home)} />
    </View>
  );
}

const styles = StyleSheet.create({});
