import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import BouncingBalls from 'react-native-bouncing-ball';

export default function ParticleSimulation(RiskProb, pplCount) {
  const peopleCount = parseInt(pplCount);
  let riskInfection = parseInt(RiskProb);
  function checkRiskInfExists(RiskProb) {
    if (RiskProb < 1) {
      riskInfection = 1;
    }
  }
  checkRiskInfExists(RiskProb);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.simulationContainer}>
        <BouncingBalls
          amount={riskInfection}
          animationDuration={5000}
          minSpeed={30}
          maxSpeed={40}
          minSize={5}
          maxSize={5}
          imageBall={require('./images/corona_virus.png')}
        />

        <BouncingBalls
          amount={peopleCount}
          animationDuration={5000}
          minSpeed={30}
          maxSpeed={40}
          minSize={20}
          maxSize={20}
          imageBall={require('./images/man.png')}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 80,
  },

  simulationContainer: {
    backgroundColor: '#ffff',
    flex: 1,
    paddingTop: 80,
  },
});
