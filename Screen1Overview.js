import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {Card, Header} from 'react-native-elements';

const dataOverview = () => {
  const positiveCases =
    'https://www.data.gv.at/katalog/dataset/4b71eb3d-7d55-4967-b80d-91a3f220b60c';
  const warnLevel =
    'https://www.data.gv.at/katalog/dataset/52abfc2b-031c-4875-b838-653abbfccf4e';
  const vaccination =
    'https://www.data.gv.at/katalog/dataset/d230c9e8-745a-4da3-a3b4-86842591d9f0';
  //'https://www.data.gv.at/katalog/dataset/7effe370-ce79-4286-b299-c5d851f546ff';
  const REffective =
    'https://www.ages.at/wissen-aktuell/publikationen/epidemiologische-parameter-des-covid19-ausbruchs-oesterreich-20202021/';

  const modalCalculation = 'https://www.mpic.de/4747361/risk-calculator';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <Header
            backgroundColor="#005fff"
            centerComponent={{
              text: 'App Overview',
              style: {color: '#fff', fontSize: 18, fontWeight: 'bold'},
              color: '#fff',

              textColor: '#fff',
              fontWeight: 'bold',
            }}
          />

          <View style={styles.cardRow}>
            <TouchableOpacity onPress={() => Linking.openURL(positiveCases)}>
              <Card containerStyle={styles.cardStyle}>
                <Card.Title style={styles.cardTitle}>Positive Cases</Card.Title>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Granularity:</Text>
                  {'\n'}
                  District-Wise
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Update Interval:</Text>
                  {'\n'}Daily
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Availability:</Text>
                  {'\n'}Lagging By Two Days
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Graph Interval: </Text>
                  {'\n'}Week-Month-Year
                </Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(vaccination)}>
              <Card containerStyle={styles.cardStyle}>
                <Card.Title style={styles.cardTitle}>Vaccination </Card.Title>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Granularity:</Text>
                  {'\n'}District-Wise
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Update Interval:</Text>
                  {'\n'}Daily
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Availability:</Text>
                  {'\n'}Lagging By Two Days
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Graph Interval: </Text>
                  {'\n'}For Specific Date
                </Text>
              </Card>
            </TouchableOpacity>
          </View>

          <View style={styles.cardRow}>
            <TouchableOpacity onPress={() => Linking.openURL(REffective)}>
              <Card containerStyle={styles.cardStyle}>
                <Card.Title style={styles.cardTitle}>REffective</Card.Title>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Granularity:</Text>
                  {'\n'}Country
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Update Interval:</Text>
                  {'\n'}Daily
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Availability:</Text>
                  {'\n'}Lagging By One Week
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Graph Interval: </Text>
                  {'\n'}For Specific Date
                </Text>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(warnLevel)}>
              <Card containerStyle={styles.cardStyle}>
                <Card.Title style={styles.cardTitle}>
                  {' '}
                  Warning Level{' '}
                </Card.Title>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Granularity:</Text>
                  {'\n'}District-Wise
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Update Interval:</Text>
                  {'\n'}Weekly Once
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Availability:</Text>
                  {'\n'}For Every Week
                </Text>
                <Text style={styles.textStyle}>
                  <Text style={styles.subHeading}>Map Interval:</Text>
                  {'\n'} Week
                </Text>
              </Card>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => Linking.openURL(modalCalculation)}>
              <Card containerStyle={styles.modelCard}>
                <Card.Title style={styles.cardTitle}>
                  Model Simulation Parameters
                </Card.Title>

                <View>
                  <Text style={styles.subHeading}>Room:</Text>
                  <Text style={styles.textStyle}>
                    Size ,Ventilation and Ceiling Height
                  </Text>
                  <Text style={styles.subHeading}>People: </Text>
                  <Text style={styles.textStyle}>
                    People Count, Speech Volume and Duration
                  </Text>
                  <Text style={styles.subHeading}>Duration:</Text>
                  <Text style={styles.textStyle}>Stay Duration in Room</Text>
                  <Text style={styles.subHeading}>Own Behavior:</Text>
                  <Text style={styles.textStyle}>Masks and Vaccination</Text>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default dataOverview;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffffff',
  },
  textStyle: {
    color: 'black',
    fontSize: 14,
  },
  Heading: {
    fontWeight: 'bold',
    color: '#0087ff',
    fontSize: 15,
  },
  cardRow: {
    //flex: 1,
    flexDirection: 'row',
  },
  modelCard: {
    borderRadius: 20,
    borderColor: 'lightgrey',
    marginRight: 0,
    marginLeft: 10,
    width: 370,
    paddingTop: 6,
    paddingBottom: 15,
  },
  cardStyle: {
    paddingTop: 6,
    borderRadius: 20,
    width: 180,
    marginRight: 0,
    marginLeft: 10,
    borderColor: 'lightgrey',
  },
  cardTitle: {
    color: '#0087ff',
    fontSize: 15,
  },
  subHeading: {
    fontWeight: 'bold',
    color: 'black',
  },
});
