import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  StatusBar,
} from 'react-native';
import BehavioralProperties from './BehavioralProperties';
import RoomProperties from './RoomProperties';
import InfectedPersonProperties from './InfectedPersonProperties';
import ModalParameters from './data';
import RNCarousalCard from './rnCarousal';
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

// import Ancestor from './ancestor';
export default function ModelParamSelection({navigation}) {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[2],
  );
  //behavior
  const [maskCateogoryPpl, setMaskCategoryPpl] = useState(0);
  const [maskEfficiencyI, setMaskEfficiencyI] = useState(0);
  const [maskEfficiencyN, setMaskEfficiencyN] = useState(0);
  const [maskTypeI, setMaskTypeI] = useState('');
  const [maskTypeN, setMaskTypeN] = useState('');
  const [vaccination, setVaccination] = useState('None');
  //room
  const [eventType, setEventType] = useState(0);
  const [roomSize, setRoomSize] = useState(10);
  const [durationofStay, setDurationofStay] = useState(1);
  const [noOfPeople, setNoOfPeople] = useState(2);
  const [ventilation, setVentilation] = useState(0);
  const [ventilationType, setVentilationType] = useState('');
  const [ceilingHeight, setCeilingHeight] = useState(2.2);
  //infected person
  const [speechVolume, setSpeechVolume] = useState(0);
  const [speechDuration, setSpeechDuration] = useState(0);
  const [speechDurationinTime, setSpeechDurationinTime] = useState('');
  const [speechVolumeText, setSpeechVolumeText] = useState('');
  const behavioralProps = {
    maskCateogoryPpl,
    maskEfficiencyI,
    maskEfficiencyN,
    vaccination,
    eventType,
    roomSize,
    durationofStay,
    noOfPeople,
    ventilation,
    ceilingHeight,
    speechVolume,
    speechDuration,
    maskTypeI,
    maskTypeN,
    ventilationType,
    speechDurationinTime,
    speechVolumeText,
    setMaskCategoryPpl,
    setMaskEfficiencyI,
    setMaskEfficiencyN,
    setVaccination,
    setEventType,
    setRoomSize,
    setDurationofStay,
    setNoOfPeople,
    setVentilation,
    setCeilingHeight,
    setSpeechVolume,
    setSpeechDuration,
    setMaskTypeI,
    setMaskTypeN,
    setVentilationType,
    setSpeechDurationinTime,
    setSpeechVolumeText,
  };
  /* console.log({selectedEventType});
  console.log({maskCateogoryPpl});
  console.log({roomSize});
  console.log({durationofStay});
  console.log({noOfPeople});
  console.log({maskEfficiencyI});
  console.log({maskEfficiencyN});
  console.log({vaccination});
  console.log({ventilation});
  console.log({ceilingHeight});
  console.log({speechDuration});
  console.log({speechVolume}); */
  return (
    <View styles={styles.container}>
      <ScrollView>
        <>
          <BehavioralProperties todos={behavioralProps} />
          <RoomProperties roomprops={behavioralProps} />
          <InfectedPersonProperties infectedpplprops={behavioralProps} />
          <ModalParameters todos={behavioralProps} />
        </>
        <View style={styles.buttonStyle}>
          <Button
            // disabled={!enabled}
            title="Start Simulation"
            color="#9239FE"
            onPress={() => {
              navigation.navigate('Simulation', {
                selectedeventType: eventType,
                maskForCategory: maskCateogoryPpl,

                roomSize: roomSize,

                durationOfStay: durationofStay,

                noOfPeople: noOfPeople,

                maskEfficiencyInfected: maskEfficiencyI,

                maskEfficiencyNormal: maskEfficiencyN,
                vaccine: vaccination,

                ventilation: ventilation,

                ceilingHeight: ceilingHeight,

                speechDuration: speechDuration,

                speechVolume: speechVolume,
                maskTypeI: maskTypeI,
                maskTypeN: maskTypeN,
                ventilationType: ventilationType,
                speechDurationinTime: speechDurationinTime,
                speechVolumeText: speechVolumeText,
              });
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },

  dropdown: {
    height: 150,
    width: 150,
    flexDirection: 'row',
  },
  dropdownRow: {
    height: 35,
    width: 180,
  },
  dropdownRowText: {fontSize: 18},
  dropdownButton: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: '#d9dbde',
    height: 40,
    width: 180,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    margin: 7,
    flexDirection: 'row',
  },
  dropdownButtonText: {
    fontSize: 18,
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkblue',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  textStyle: {color: 'black'},
  row: {
    paddingTop: 1,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  textInputLabel: {
    fontSize: 16,
    width: 380,
    paddingLeft: 10,
  },
  cardrow: {
    flexDirection: 'row',
    paddingTop: 10,
  },

  imgDimensions: {
    width: 45,
    height: 45,
  },
  spaceImagesthree: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 40,
    padding: 10,
  },
  spaceImagesinSubset: {
    paddingTop: 34,
    paddingLeft: 20,
    alignContent: 'center',
    alignItems: 'center',
  },

  imgDimensionsinSubset: {
    width: 45,
    height: 45,
  },
  imageBground: {
    backgroundColor: '#add8e6',
    borderRadius: 50,
    width: 70,
    height: 72,
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonStyle: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  buttonStyle1: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  input: {
    fontSize: 16,
    textAlign: 'center',
  },
  error1style: {
    fontSize: 15,
    color: 'red',
    marginLeft: 27,
    textAlign: 'justify',
  },
  error2style: {
    fontSize: 15,
    color: 'red',
    marginLeft: 10,
    textAlign: 'justify',
  },
  error3style: {
    fontSize: 15,
    color: 'red',
    marginLeft: 24,
    textAlign: 'justify',
  },
  input1containerstyle: {
    width: 180,
    marginLeft: 28,
  },
  input2containerstyle: {
    width: 180,
    marginLeft: 9,
  },
  input3containerstyle: {
    width: 188,
    marginLeft: 25,
  },
  red: {
    backgroundColor: '#58D68D',

    borderRadius: 50,
    width: 70,
    height: 72,
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  defaultBg: {
    //backgroundColor: '#FF8661',
    backgroundColor: '#add8e6',
    borderRadius: 50,
    width: 70,
    height: 72,
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  green: {
    color: 'green',
  },
  default: {
    color: 'black',
  },
});
