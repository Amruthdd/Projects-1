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
  Button,
  TouchableOpacity,
  
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class App extends React.Component {
	constructor() {
    super()
    this.state ={
    	resultText: "",
    	calculatnText: ""
    }
    this.operations=['D','+','-','*','/']
  };


calculateResult(){
	const text=this.state.resultText
	this.setState({
		calculatnText:eval(text)
	})
}

validate(){

	const text = this.state.resultText
	switch(text.slice(-1)){
		case "+":
		case "-":
		case "*":
		case "/":
			return false
		}
		return true
	}


operate(operation){
	switch(operation){
		case 'D':
		const text=this.state.resultText.split('')
		text.pop()
		this.setState({
			resultText:text.join('')
		})
		break
		case '+':
		case '-':
		case '*':
		case '/':
			const lastChar = this.state.resultText.split('').pop()

			if(this.operations.indexOf(lastChar)>0)  return

			if(this.state.resultText == "") return
			this.setState({
				resultText:this.state.resultText + operation
			})
	}
}

buttonPressed(text){
	//console.log(text)

	if(text == "="){
		return (this.validate() && this.calculateResult())
	}


	this.setState({
		resultText:this.state.resultText+text
	})
}
render(){

	let rows= []
	let nums=[[7,8,9], [4,5,6],[1,2,3],[".",0,"="]]
	for(let i=0;i<4;i++){
		let row=[]
		for(let j=0;j<3;j++){
			row.push(<TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}><Text style={styles.btnText}>{nums[i][j]}</Text></TouchableOpacity>)
		}
		rows.push(<View style={styles.row}>{row}</View>)
	}

	
	let ops=[]
	for(let i=0;i<5;i++){
		ops.push(<TouchableOpacity onPress={() => this.operate(this.operations[i])} style={styles.btn}>
		<Text style={[styles.btnText,styles.ope]}>{this.operations[i]}</Text></TouchableOpacity>)
	}
		

  return (
  		<>
  		  <View style={styles.parent}>
  			
    			<View style={styles.result}><Text style={styles.resultText}>{this.state.calculatnText}</Text></View>
    			<View style={styles.calculatn}><Text style={styles.calculatnText}>{this.state.resultText}</Text></View>
    		
    		<View style={styles.buttons}>
    			<View style={styles.numbers}>
    					{rows}
    			</View>
    			<View style={styles.operators}>
    				{ops}
    			</View>
    		</View>
    		
    	  </View>	
    	</>
  );
}
}


const styles = StyleSheet.create({
  result: {
  	flex: 2,
  	//backgroundColor:'#e4e4e4',
  	justifyContent:'flex-end',
  	alignItems:'flex-end'
  },
  parent: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        backgroundColor: '#d6545e'
    },
  resultText:{
  	fontSize: 50,
  	color:'white'

  },
  row:{
  	flex: 1,
  	flexDirection:'row',
  	justifyContent:'center',
  	alignItems:'center'
  },
  calculatn:{
  	flex: 1,
  	//backgroundColor: '#d6545e',
  	justifyContent:'flex-end',
  	alignItems:'flex-end'
  },
  calculatnText:{
  	fontSize: 35,
  	color:'#e4e4e4'
  },
  buttons:{
  	flex: 7,
  	flexDirection: 'row'
  },
  btn:{
  	flex: 1,
  	alignItems:'center',
  	alignSelf:'stretch',
  	justifyContent:'center'

  },
  btnText:{
  	fontSize:30,
  	alignItems:'center',
  	justifyContent:'center',
  	color:'gray'
  },
  numbers:{
  	flex: 3,
  	backgroundColor:'white',
  	
  },
  operators:{
  	flex: 1,
  	backgroundColor:'#e4e4e4',
  	justifyContent:'flex-start',
  	alignItems:'center'
  },
  ope:{
  	flex:1,
  	color:'#d6545e',
  	justifyContent:'flex-start',
  	alignItems:'center',
  	marginTop:30
  }

});

//export default App;
