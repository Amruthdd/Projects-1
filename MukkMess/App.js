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
  Image,
  StatusBar,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default class App extends React.Component {
  constructor() {
    super()
    this.state ={
      count: 0,
      count2: 0,
      count3: 0,
      subTot: 0
    }
}
  
decrement() {
    this.storeKey(this.state.count)
    this.setState({
      count: this.state.count - 1
    });
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

decrementL() {
    this.setState({
      count2: this.state.count2 - 1
    });
  }

  incrementL() {
    this.setState({
      count2: this.state.count2 + 1
    });
  }


  decrementD() {
    this.setState({
      count3: this.state.count3 - 1
    });
  }

  incrementD() {
    this.setState({
      count3: this.state.count3 + 1
    });
  }
  clearAll(){
    this.setState({
      count:0,
      count2:0,
      count3:0
    })
  }

async storeKey(data){
    try {
        await AsyncStorage.setItem('c1', data);
        
        console.warn("Set");
      
      } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
      }
  }

  static navigationOptions={
    header: null  
  }

 render(){
  return (
    <>
     <View style={styles.parent}>
      <View style={[{flex:1,flexDirection:'row',marginBottom:-2},styles.topBar]}>
       <View style={{flex:2}}>
        <Text style={styles.appName}>MukkMess</Text>
       </View>

       <View style={[{flex:1,marginTop: 5,marginBottom: 7,marginRight:150,marginLeft:-80,alignSelf:'flex-end'},styles.btnClear]}>
        <TouchableOpacity onPress={() => {this.clearAll()}}><View>
        <Text style={{fontSize: 20,  color: '#d6545e', fontFamily: 'Nexa Bold'}}>ClearAll</Text></View>
        </TouchableOpacity>
       </View>

      </View>
      <View style={{flex: 9 ,backgroundColor:'white'}}>
       
          <View style={{flex: 1.5,alignItems:'center',justifyContent:'center'}}>
            <View style={[{flex: 1,flexDirection:'row',marginTop: 5,marginBottom: 1 },styles.btnBig]}>
              <View style={{flex:4}}>
                <Image
                      style={styles.foodImage}
                      source={require('./assets/f1.png')}
                      resizeMode="contain"
                    ></Image>
              </View>
              <View style={{flex:6}}>
               <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:4,alignSelf:'flex-start'}}>
                 <Text style={styles.mainText}>BreakFast</Text>
                </View>
                <View style={{flex:2}}>
                  <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:1 ,justifyContent:'flex-start',alignSelf:'center'}}>
                    
                      <View style={[{marginTop: 5,marginBottom: 1 },styles.btn]}>
                        <TouchableOpacity onPress={() => {this.increment()}}><View>
                         <Text style={{fontSize: 20, textAlign: 'center', color: '#d6545e', fontFamily: 'Nexa Bold'}}>+</Text></View>
                        </TouchableOpacity>
                      </View>
                     
                    </View>
                    <View style={{flex:1 ,justifyContent:'flex-start',alignSelf:'center'}}>
                      
                       <View style={[{marginTop: 5,marginBottom: 1 },styles.btn]}>
                        <TouchableOpacity onPress={() => {this.decrement()}}><View>
                        <Text style={{fontSize: 30, textAlign: 'center', color: '#d6545e', fontFamily: 'Nexa Bold'}}>-</Text></View>
                        </TouchableOpacity>
                       </View>
                      
                    </View>
                  </View>
                </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <View>
                      <Text style={{fontSize:20,color:'white',fontFamily:"Nexa Light"}}>Attended</Text></View>
                  <View style={{flex:1 ,justifyContent:'flex-start',alignSelf:'flex-start'}}>
                     
                      <View style={[{marginTop: 5,marginBottom: 6 },styles.btnTot]}>
                        <Text style={{fontSize: 20, textAlign: 'center', color: '#d6545e', fontFamily: 'Nexa Bold'}}>{this.state.count}</Text>
                           
                  
                      </View>

                    </View>

                </View>
              </View>

            </View>
          </View>
          <View style={{flex: 1.5}}>
              <View style={[{flex: 1,flexDirection:'row',marginTop: 5,marginBottom: 1 },styles.btnBig]}>
              <View style={{flex:4}}>
                <Image
                      style={styles.foodImage}
                      source={require('./assets/f2.png')}
                      resizeMode="contain"
                    ></Image>
              </View>
              <View style={{flex:6}}>
               <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:4,alignSelf:'flex-start'}}>
                 <Text style={styles.mainText}>Lunch</Text>
                </View>
                <View style={{flex:2}}>
                  <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:1 ,justifyContent:'flex-start',alignSelf:'center'}}>
                     
                      <View style={[{marginTop: 5,marginBottom: 1 },styles.btn]}>
                       <TouchableOpacity onPress={() => {this.incrementL()}}><View>
                        <Text style={{fontSize: 20, textAlign: 'center', color: '#d6545e', fontFamily: 'Nexa Bold'}}>+</Text></View>
                       </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{flex:1 ,justifyContent:'flex-start',alignSelf:'center'}}>
                      <View style={[{marginTop: 5,marginBottom: 1 },styles.btn]}>
                       <TouchableOpacity onPress={() => {this.decrementL()}}><View>
                        <Text style={{fontSize: 30, textAlign: 'center', color: '#d6545e', fontFamily: 'Nexa Bold'}}>-</Text></View>
                       </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <View>
                      <Text style={{fontSize:20,color:'white',fontFamily:"Nexa Light"}}>Attended</Text></View>
                  <View style={{flex:1 ,justifyContent:'flex-start',alignSelf:'flex-start'}}>
                     
                      <View style={[{marginTop: 5,marginBottom: 6 },styles.btnTot]}>
                        <Text style={{fontSize: 20, textAlign: 'center', color: '#d6545e', fontFamily: 'Nexa Bold'}}>{this.state.count2}</Text>
                      </View>

                    </View>

                </View>
              </View>

            </View>

          </View>
          <View style={{flex: 1.5}}>
              <View style={[{flex: 1,flexDirection:'row',marginTop: 5,marginBottom: 1 },styles.btnBig]}>
              <View style={{flex:4}}>
                <Image
                      style={styles.foodImage}
                      source={require('./assets/f3.png')}
                      resizeMode="contain"
                    ></Image>
              </View>
              <View style={{flex:6}}>
               <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:4,alignSelf:'flex-start'}}>
                 <Text style={styles.mainText}>Dinner</Text>
                </View>
                <View style={{flex:2}}>
                  <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:1 ,justifyContent:'flex-start',alignSelf:'center'}}>
                     
                      <View style={[{marginTop: 5,marginBottom: 1 },styles.btn]}>
                       <TouchableOpacity onPress={() => {this.incrementD()}}><View>
                        <Text style={{fontSize: 20, textAlign: 'center', color: '#d6545e', fontFamily: 'Nexa Bold'}}>+</Text></View>
                       </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{flex:1 ,justifyContent:'flex-start',alignSelf:'center'}}>
                      <View style={[{marginTop: 5,marginBottom: 1 },styles.btn]}>
                       <TouchableOpacity onPress={() => {this.decrementD()}}><View>
                        <Text style={{fontSize: 30, textAlign: 'center', color: '#d6545e', fontFamily: 'Nexa Bold'}}>-</Text></View>
                       </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <View>
                      <Text style={{fontSize:20,color:'white',fontFamily:"Nexa Light"}}>Attended</Text></View>
                  <View style={{flex:1 ,justifyContent:'flex-start',alignSelf:'flex-start'}}>
                     
                      <View style={[{marginTop: 5,marginBottom: 6 },styles.btnTot]}>
                        <Text style={{fontSize: 20, textAlign: 'center', color: '#d6545e', fontFamily: 'Nexa Bold'}}>{this.state.count3}</Text>
                      </View>

                    </View>

                </View>
              </View>

            </View>

          </View>
          <View style={{flex: 1}}>
              <View style={[{flex: 1,flexDirection:'row',marginTop: 5,marginBottom: 5 },styles.btnSub]}>
              
                <View style={styles.subTot}><Text style={styles.mainText}>Sub Total</Text></View>
                <View style={{flex:1 ,justifyContent:'flex-start',alignSelf:'flex-start'}}>
                     
                      <View style={[{marginTop: 5,marginBottom: 6,marginRight:10,marginLeft:-40},styles.btnTott]}>
                        <Text style={{fontSize: 20,  color: '#d6545e', fontFamily: 'Nexa Bold'}}>{this.state.count * 30 +this.state.count2 * 40 +this.state.count3 * 40}</Text>
                      </View>

                    </View>

                </View>

            
          </View>

     
       
      </View>
     </View>
    </>
  );
}
}

const styles = StyleSheet.create({
  scrollView: {
    flex:1,
    backgroundColor: Colors.lighter,
  },
  parent: {
    flex: 1,
    backgroundColor:"#E84A5F"
  },
  topbar:{
    flex: 1,
    backgroundColor:'#d6545e',
    justifyContent:'center',
    marginTop:4
  },
  appName: {
    fontFamily:'Nexa Bold',
    fontSize: 30,
    color:'#ECECEC',
    marginLeft: "6%",
    marginTop:"10%",
    justifyContent:"center",

  },
  foodImage:{
    flex: 2, 
    height: 100,
    width:100,
    alignSelf: 'center',
    justifyContent:'center',
    marginTop: 10,
    //marginRight:3
  },
  mainText:{
    color:'#ECECEC',
    fontSize: 25,
    fontFamily:'Nexa Light',
    marginTop:40,

  },
  btn: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: 'white',
        //alignSelf: 'center', 
        borderColor: 'white', 
        borderRadius: 50, 
        borderWidth: 1, 
        //marginLeft: '1%', 
        marginRight: '40%',
        marginTop: 45,
        //marginBottom:'20%',

        elevation: 6
  },
  btnTot: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: 'white',
        alignSelf: 'center', 
        borderColor: 'white', 
        borderRadius: 10, 
        borderWidth: 7, 
        //marginLeft: '5%', 
        marginRight: '65%',
        marginTop: 20,
        marginBottom:20,

        elevation: 6
  },
  btnClear: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: 'white',
        alignSelf: 'center', 
        borderColor: 'white', 
        borderRadius: 10, 
        borderWidth: 7, 
        marginLeft: '20%', 
        marginRight: '5%',
        marginTop: 20,
        marginBottom:20,

        elevation: 6
  },
  btnBig: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#E84A5F',
        //alignSelf: 'flex-start', 
        borderColor: '#E84A5F', 
        borderRadius: 20, 
        borderWidth: 9, 
        marginLeft: 10, 
        marginRight: 10,
        marginTop: 20,
        marginBottom:5,

        elevation: 7
  },
  btnSub: {
        flex: 1, 
        justifyContent: 'space-between',
        backgroundColor: '#E84A5F',
        //alignItems: 'flex-start', 
        borderColor: '#E84A5F', 
        borderRadius: 20, 
        borderWidth: 9, 
        marginLeft: 10, 
        marginRight: 10,
        marginTop: 20,
        marginBottom:20,

        elevation: 6
  },
  subTot:{
    flex: 2,
    marginLeft:30,
    alignItems:'center',
    marginTop:-23
    
  },
  btnTott: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: 'white',
        alignSelf: 'center', 
        borderColor: 'white', 
        borderRadius: 10, 
        borderWidth: 7, 
        //marginLeft: '-40%', 
        marginRight: '50%',
        marginTop: 10,
        marginBottom:10,

        elevation: 6
  },
});


