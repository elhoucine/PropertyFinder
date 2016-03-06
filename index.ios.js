/**
* Property finder App using react-native
* Find the tutorial oneline: https://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript
*/
'use strict'
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
} from 'react-native';

var SearchPage = require('./searchPage.js');


class HelloWorld extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Hello you man oho graaap!</Text>
      </View>
    )
  }
}

class PropertyFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}
      />
    );
  }
}

var styles = StyleSheet.create({
  text:{
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1,
  }
});


AppRegistry.registerComponent('PropertyFinder', ()=> PropertyFinderApp);
