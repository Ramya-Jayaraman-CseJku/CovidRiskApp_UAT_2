import React, {useState} from 'react';
import BehavioralProperties from './BehavioralProperties';
import RoomProperties from './RoomProperties';
import InfectedPersonProperties from './InfectedPersonProperties';
import ModalParameters from './data';
import ModelParamSelection from './modalParameters';
export default function Ancestor() {
  //behavior
  const [maskCateogoryPpl, setMaskCategoryPpl] = useState(0);
  const [maskEfficiencyI, setMaskEfficiencyI] = useState(0);
  const [maskEfficiencyN, setMaskEfficiencyN] = useState(0);
  const [vaccination, setVaccination] = useState('None');
  //room
  const [eventType, setEventType] = useState(0);
  const [roomSize, setRoomSize] = useState(10);
  const [durationofStay, setDurationofStay] = useState(1);
  const [noOfPeople, setNoOfPeople] = useState(2);
  const [ventilation, setVentilation] = useState(0);
  const [ceilingHeight, setCeilingHeight] = useState(2.2);
  //infected person
  const [speechVolume, setSpeechVolume] = useState(0);
  const [speechDuration, setSpeechDuration] = useState(0);

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
  };

  return (
    <>
      <BehavioralProperties todos={behavioralProps} />
      <RoomProperties roomprops={behavioralProps} />
      <InfectedPersonProperties infectedpplprops={behavioralProps} />
      <ModalParameters todos={behavioralProps} />
      <ModelParamSelection params={behavioralProps} />
    </>
  );
}
