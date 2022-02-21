import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryBar,
  VictoryZoomContainer,
  VictoryTooltip,
  VictoryBrushContainer,
  VictoryVoronoiContainer,
  VictoryAxis,
  createContainer,
  VictoryLabel,
} from 'victory-native';
import {Icon, Card} from 'react-native-elements';
import Collapsible from 'react-native-collapsible';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function getReffectiveValue() {
  const [loading, setLoading] = useState(true);
  const [rEffAustria, setREffAustria] = useState([]);
  const [showRiskInfo, setShowRiskInfo] = useState(true);
  const VictoryZoomVoronoiContainer = createContainer('zoom', 'voronoi');
  const toggleRiskInfo = () => {
    //Toggling the state of single Collapsible
    setShowRiskInfo(!showRiskInfo);
  };
  function riskInfo() {
    return (
      <View>
        <Collapsible collapsed={showRiskInfo}>
          <Text style={styles.REffText}>
            REffective(Effective Reproductive number) measures the
            transmissibility of the virus during an epidemic(COVID-19). We can
            predict the new cases that will be generated by existing infected
            individual/s in a population at a given time. REffective should be
            {' < 1'} for controlling COVID-19 spread.
          </Text>
        </Collapsible>
      </View>
    );
  }
  const getREffectiveValue = async () => {
    try {
      const response = await fetch(
        `https://covid19infoapi.appspot.com/api/R_eff_Austria/?interval=Daily`,
      );
      const json = await response.json();
      setREffAustria(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getREffectiveValue();
  }, []);
  var MyChart = (
    <VictoryLine
      style={{
        data: {stroke: '#0597D8', strokeWidth: 4},
        parent: {border: '1px solid #ccc'},
      }}
      data={rEffAustria}
      x={'Interval'}
      y={'R_eff'}
      interpolation="catmullRom"
    />
  );
  if (loading)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View style={styles.row1}>
              <Text style={styles.heading}>R_Effective_Value {'\n'}</Text>
              <TouchableOpacity onPress={toggleRiskInfo}>
                <Icon
                  name="information"
                  type="material-community"
                  color="#ED471C"
                />
              </TouchableOpacity>
            </View>
            {riskInfo()}
          </View>
          <View
            style={{
              flexDirection: 'row',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#0597D8',
                marginTop: 3,
              }}>
              Austria Daily View
            </Text>
          </View>

          <VictoryChart
            theme={VictoryTheme.material}
            width={400}
            height={500}
            domainPadding={{x: [2, 15]}}
            padding={{top: 48, left: 50, right: 30, bottom: 70}}
            containerComponent={
              <VictoryZoomVoronoiContainer
                allowPan={true}
                allowZoom={true}
                responsive={false}
                zoomDimension="x"
                minimumZoom={{x: 3, y: 0.01}}
                /*  zoomDomain={zoomDomain}
                  onZoomDomainChange={handleZoom} */
                labels={({datum}) => `R_Eff: ${datum.R_eff}`}
              />
            }>
            <VictoryAxis
              dependentAxis
              fixLabelOverlap={true}
              style={{
                axis: {stroke: 'black'},
                ticks: {stroke: 'black'},

                tickLabels: {
                  fill: 'black',
                  fontSize: 13,
                },
              }}
            />
            <VictoryAxis
              fixLabelOverlap={true}
              independentAxis
              tickLabelComponent={<VictoryLabel angle={-60} y={462} dy={3} />}
              style={{
                axis: {stroke: 'black'},
                ticks: {stroke: 'black'},

                tickLabels: {
                  fill: 'black',
                  fontSize: 13,
                },
              }}
            />
            {MyChart}
          </VictoryChart>

          {/*  <VictoryChart
              domainPadding={{y: [0, 10]}}
              width={380}
              height={160}
              scale={{x: 'linear'}}
              padding={{top: 30, left: 60, right: 10, bottom: 50}}
              containerComponent={
                <VictoryBrushContainer
                  responsive={false}
                  brushDimension="x"
                  brushStyle={{fill: 'teal', opacity: 0.2}}
                  brushDomain={selectedDomain}
                  onBrushDomainChange={handleBrush}
                />
              }>
              <VictoryAxis
                independentAxis
                fixLabelOverlap={true}
              
                style={{
                  axis: {stroke: 'black'},
                  ticks: {stroke: 'black'},

                 
                  tickLabels: {
                    fill: 'black',
                    fontSize: 13,
                  },
                
                }}
              />
              <VictoryLine
                style={{
                  data: {stroke: 'green'},
                }}
                data={rEffAustria}
                x={'Interval'}
                y={'R_eff'}
                interpolation="catmullRom"
              />
            </VictoryChart> */}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3,
    //backgroundColor: '#eeeeee',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  parametersRow: {
    flexDirection: 'row',
  },

  centeredView: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    //padding: '10',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    //alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 320,
  },
  button: {
    width: 100,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  normalButton: {
    width: 70,
    height: 30,
    borderRadius: 50,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 5,
    paddingLeft: 0,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 15,
    color: '#008080',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
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
  heading: {
    fontSize: 16,
    color: '#0597D8',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
  },
  subHeading: {
    fontSize: 16,
    color: '#4c70e6',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  REffText: {
    fontSize: 15,
    marginBottom: 2,
    paddingBottom: 2,
    textAlign: 'left',
    marginLeft: 7,
    marginRight: 5,
    color: 'black',
  },
});
