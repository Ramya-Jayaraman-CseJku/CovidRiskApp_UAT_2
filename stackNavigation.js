import * as React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import modelParamSelection from './modalParameters';
import Simulation from './modalSimulation';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#9239FE"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={true}
      />
      <Stack.Navigator
        initialRouteName="Modal Parameters"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#9239FE',
          },
        }}>
        <Stack.Screen
          name="Modal Parameters"
          component={modelParamSelection}
          options={{
            backgroundColor: '#9239FE',

            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Simulation"
          component={Simulation}
          options={{
            backgroundColor: '#9239FE',

            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </View>
  );
}
export const MainStackNavigator = () => {
  return <MyStack />;
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    paddingTop: 0,
  },
});
