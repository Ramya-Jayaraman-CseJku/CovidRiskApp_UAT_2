import React, {useState, useEffect} from 'react';

import {
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  Modal,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {
  VictoryBar,
  VictoryGroup,
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
  VictoryTooltip,
  VictoryBrushContainer,
  VictoryVoronoiContainer,
  VictoryAxis,
  createContainer,
  VictoryLabel,
} from 'victory-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as dropdownvales from './municipalities.json';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

export default function getFullyVaccinatedCountAPI() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [districtWiseVaccCount, setDistrictWiseVaccCount] = useState([]);
  const [selectedDistrictName, setSelectedDistrictName] = useState('Linz');
  const [selectedInterval, setSelectedInterval] = useState('Monthly');
  const [query, setQuery] = useState('');

  const [state, setState] = useState({data: dropdownvales['Municipalities']});
  const [modalVisible, setModalVisible] = useState(false);

  const selectedYear = 2021;

  const showMenu = () => setVisible(true);
  const hideMenu = () => setVisible(false);

  const getSelectedInterval = Interval => {
    setSelectedInterval(Interval);
    //hideMenu();
  };
  const getSelectedState = district => {
    setSelectedDistrictName(district);

    setModalVisible(!modalVisible);
  };
  const visibleYear = true;

  const ddvalues = dropdownvales['Municipalities'];

  /* const encodedDistrict = encodeURIComponent(selectedStateName);
  const encodedYear = encodeURIComponent(year);
  const encodedInterval = encodeURIComponent(interval); */
  //brush and zoomDomain
  const VictoryZoomVoronoiContainer = createContainer('zoom', 'voronoi');
  const [selectedDomain, setSelectedDomain] = useState();
  const [zoomDomain, setZoomDomain] = useState();
  const handleZoom = domain => {
    setSelectedDomain(domain);
  };
  const handleBrush = domain => {
    setZoomDomain(domain);
  };
  const getVaccinationData = async () => {
    try {
      const response = await fetch(
        `https://covid19infoapi.appspot.com/api/VaccinationDistricts/?districtname=${selectedDistrictName}`,
      );
      const json = await response.json();
      setDistrictWiseVaccCount(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVaccinationData();
  }, [selectedDistrictName, selectedInterval]);

  function searchData(text) {
    console.log(text);
    const newData = ddvalues.filter(item => {
      const itemData = item.municipality_name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setState({
      data: newData,
    });
    setQuery(text);
  }
  const itemSeparator = () => {
    return (
      <View
        style={{
          height: 0.7,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  const Item = ({item, onPress, textColor}) => (
    <ScrollView>
      <TouchableOpacity onPress={onPress}>
        <Text style={[textColor, styles.row]}>{item.municipality_name}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
  const renderItem = ({item}) => {
    const color =
      item.municipality_name === selectedDistrictName ? 'green' : 'black';

    return (
      <Item
        item={item}
        onPress={() => getSelectedState(item.municipality_name)}
        textColor={{color}}
      />
    );
  };
  var MyChart = (
    <VictoryBar
      data={districtWiseVaccCount}
      x={'Type'}
      y={'Dose'}
      labels={({datum}) => `${datum.Dose}`}
      style={{
        data: {stroke: 'green', strokeWidth: 3, fill: '#00A2EB'},
        parent: {border: '7px solid #ccc'},
      }}
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
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView1}>
                <View style={styles.modalView}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => searchData(text)}
                    value={query}
                    underlineColorAndroid="transparent"
                    placeholder="Search for a district"
                    placeholderTextColor="black"
                  />

                  <FlatList
                    data={state.data}
                    keyExtractor={(item, id) => id.toString()}
                    ItemSeparatorComponent={itemSeparator}
                    initialNumToRender={5}
                    renderItem={renderItem}
                    style={{marginTop: 10}}
                  />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.ModalButtontextStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <View style={styles.row1}>
              <View>
                <Text style={styles.heading}>
                  {' '}
                  Vaccinated Count - District {'\n'}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>{selectedDistrictName} </Text>
            </Pressable>

            <Text style={styles.textStyle}>
              Population: {districtWiseVaccCount[0].municipality_population}
            </Text>
            <Text style={styles.textStyle}>
              Date: {districtWiseVaccCount[0].Interval}
            </Text>
          </View>

          <VictoryChart
            theme={VictoryTheme.material}
            width={400}
            height={500}
            domainPadding={{x: [40, 40]}}
            padding={{top: 60, left: 75, right: 40, bottom: 70}}>
            <VictoryAxis
              dependentAxis
              fixLabelOverlap={true}
              tickValues={districtWiseVaccCount['Type']}
              style={{
                axis: {stroke: 'black', size: 7},
                ticks: {stroke: 'black'},

                tickLabels: {
                  fill: 'black',
                  fontSize: 14,
                },
                grid: {
                  stroke: 'transparent',
                },
              }}
            />
            <VictoryAxis
              fixLabelOverlap={true}
              independentAxis
              tickLabelComponent={<VictoryLabel y={460} dy={10} />}
              style={{
                axis: {stroke: 'black', size: 7},
                ticks: {stroke: 'black'},

                tickLabels: {
                  fill: 'black',
                  fontSize: 14,
                },
                grid: {
                  stroke: 'transparent',
                  size: 7,
                },
              }}
            />

            {MyChart}
          </VictoryChart>
        </ScrollView>
      </View>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110,
    marginBottom: 150,
  },
  row: {
    fontSize: 18,
    padding: 10,
  },
  parametersRow: {
    flexDirection: 'row',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
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
    marginLeft: 5,
    width: 120,
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
    backgroundColor: 'dodgerblue',
  },
  buttonClose: {
    backgroundColor: '#F93C2D',
  },
  textStyle: {
    fontSize: 15,
    color: '#0597D8',
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
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  ModalButtontextStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 280,
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 50,
    backgroundColor: '#FFFF',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
