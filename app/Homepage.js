import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

import I18n from 'react-native-i18n';



import Start from './Start'
import Knowledge from './Knowledge'

export default class RubbishGame extends Component{
  render(){
    return(

      <NavigatorIOS
                style={{flex:1}}
                initialRoute = {{
                  component: HomePage,
                  title: 'Home'
                }}
                configureScene = {(route) =>
                  {
                    return NavigatorIOS.SceneConfigs.FloatFromBottom;
                  }
                }
                renderScene = { (route, navigator) => {
                  let HomePage = route.component;
                  return <HomePage navigator={navigator}/>
                }}
                >
              </NavigatorIOS>)
  }
}


export class HomePage extends Component {

  _Start() {
    this.props.navigator.push({
      name: 'Start',
      component: Start
    });
  }

  _Knowledge(){
    this.props.navigator.push({
      name:'Knowledge',
      component:Knowledge
    });
  }
  render() {
    return (
      <Image source={require('./Image/back2.jpg')} style={styles.container}>
        <Image style={styles.imageStyle}
           source={require('./Image/icon.jpg')}/>

           <Text style={styles.text}>Rubbish Tutorial</Text>

       <TouchableOpacity style={styles.startBtn} onPress={this._Start.bind(this)}>
          <Text style={styles.startText}>{I18n.t("start")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.KnowledgeBtn} onPress={this._Knowledge.bind(this)}>
        <Text style={styles.KnowledgeText}>{I18n.t("knowledge")}</Text>
        </TouchableOpacity>
        
        
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
    width:null,
    height:null,
  },
  imageStyle: {
    width:200,
    height:130,
    margin:10,
  },
  text: {
    fontSize: 20,
    color: 'pink'
    
  },
  startBtn: {
    width: 180,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    marginTop:40,
    backgroundColor: 'red'
  
  },
  startText: {
    flex:1,
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
  KnowledgeBtn:{
    width: 180,
    height: 30,
    borderWidth: 1,
    marginTop:40,
    borderRadius: 5,
    backgroundColor: 'limegreen'
    
  },
  KnowledgeText:{
    flex:1,
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
},
  
});

I18n.fallbacks = true;

I18n.translations={
  en:{
    start:"Start",
    knowledge:"Knowledge"

  },

  zh:{

    start:"开始",
    knowledge:"了解"
  }
}



module.exports=RubbishGame;