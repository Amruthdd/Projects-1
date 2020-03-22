/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
  
      
            
          
            <View style={{flex:1 }}>
              <Text style={styles.hello}>Hello World</Text>
              
            </View>
            
            
            
            
        
      
    
  );
};

const styles = StyleSheet.create({
  hello: {

    fontSize: 35,
    backgroundColor: Colors.lighter,
  },
});

export default App;
