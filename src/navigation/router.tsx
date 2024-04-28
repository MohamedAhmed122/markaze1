import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStackParamsList, AppStackParams } from './type';

import Login from '../screen/login';
import Register from '../screen/register';
import Home from '../screen/home';
import { AppButton } from '../common/app-button';

export const Stack = createStackNavigator<AppStackParamsList>();

export default function Router() {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen name={AppStackParams.login} component={Login} />
      <Stack.Screen name={AppStackParams.register} component={Register} />
      <Stack.Screen name={AppStackParams.home} component={Home} />
    </Stack.Navigator>
  );
}
