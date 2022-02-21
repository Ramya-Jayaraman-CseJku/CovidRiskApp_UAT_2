import * as React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import getPositiveCasesCountAPI from './Screen2PositiveCount';
import getFullyVaccinatedCountAPI from './Screen3Vaccination';
import getReffectiveValue from './Screen4Reff';
import getVaccineDistricts from './Screen4VaccineDistricts';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#148F77"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={true}
      />
      <Tab.Navigator
        style={{paddingTop: 1}}
        initialRouteName="PositiveCasesCount"
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
          tabBarStyle: {backgroundColor: '#148F77'},
        }}>
        <Tab.Screen
          name="PositiveCasesCount"
          component={getPositiveCasesCountAPI}
          options={{tabBarLabel: 'Cases'}}
        />
        {/* <Tab.Screen
          name="Vaccination"
          component={getFullyVaccinatedCountAPI}
          options={{tabBarLabel: 'Vaccine'}}
        /> */}
        <Tab.Screen
          name="Vaccination"
          component={getVaccineDistricts}
          options={{tabBarLabel: 'Vaccine'}}
        />
        <Tab.Screen
          name="REffective"
          component={getReffectiveValue}
          options={{tabBarLabel: 'REff'}}
        />
      </Tab.Navigator>
    </View>
  );
}
export default function topTabBarCharts() {
  return <MyTabs />;
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    paddingTop: 0,
  },
});
