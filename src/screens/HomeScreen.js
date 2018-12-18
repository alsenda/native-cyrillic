import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from '../assets/styles';
import Cyrillic from '../components/Cyrillic';
import alphabetJSON from '../assets/alphabet.json';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    //const alphabet = alphabetJSON.map(char => <Cyrillic char={char.cyrillic.upper} />);
    const alphabet = Object.keys(alphabetJSON).map((key, index) => <Cyrillic key={index} char={alphabetJSON[key]} />);

    //console.log(alphabetJSON);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/fourletters.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>

            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
              {alphabet}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}