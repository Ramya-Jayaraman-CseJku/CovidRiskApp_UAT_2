import 'react-native-gesture-handler';
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import dataOverview from './Screen1Overview';
import topTabBarCharts from './topTabBar';
import getWarningLevelDataAPI from './getCoronaWarningLevel';
import {MainStackNavigator} from './stackNavigation';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Overview"
      activeColor="#f0edf6"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen
        name="Overview"
        component={dataOverview}
        options={{
          tabBarLabel: 'Overview',
          tabBarColor: '#005fff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="database-check"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Charts"
        component={topTabBarCharts}
        options={{
          tabBarLabel: 'Charts',
          tabBarColor: '#148F77',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="chart-line" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="WarnLevel"
        component={getWarningLevelDataAPI}
        options={{
          tabBarLabel: 'WarnLevel',
          tabBarColor: '#d78700',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="map-marker-alert-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Modal"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Modal',
          tabBarColor: '#9239FE',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="thought-bubble"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
