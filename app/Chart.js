import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  NavigatorIOS,
  Image
  
} from 'react-native';

import Echarts from 'native-echarts';
import Dimensions from 'Dimensions';
import Collect from './Collect';
const {width} = Dimensions.get('window');
export default class Chart extends Component {

  _Collect() {
    this.props.navigator.push({
      name: 'Collect',
      component: Collect
    });
  }


  constructor(props) {
      super(props);
      this.state = {
        general:[3],
        compostable:[7],
        recycle:[6],
        hazardous:[5],

      }
  }



  render() {
    const option = {
          
          tooltip : {
              trigger: 'axis'
          },
          
          legend: {
              data:['Generral','Compostable','Recycle','Hazardous']
          },
          
          toolbox: {
              
              show : false,
              showTitle:true,
              feature : {
                  
                  dataView : {show: false, readOnly: false},
                  magicType : {
                  
                    type: ['bar'],
                  },

              }
          },
          xAxis : [
              {
                  
                  boundaryGap:true,
                  type : 'category',
                  name : 'view',
                  data : ['Amount']
              }
          ],
          yAxis : [
              {
                  type : 'value',
                  name : 'Amount'
              }
          ],
        
          color:['deepskyblue','limegreen','gold','red'],
        
          series : [
              {
                  name:'Generral',
                  type:'bar',
                  data:this.state.general
              },
              {
                  name:'Compostable',
                  type:'bar',
                  data:this.state.compostable
              },
              {  name:'Recycle',
                  type:'bar',
                  data:this.state.recycle
                },
                {
                  name:'Hazardous',
                  type:'bar',
                  data:this.state.hazardous
                }
          ]
        };
  return (
      
       <Image source={require('./Image/back2.jpg')} style={styles.container}>
          <Text style={styles.title}>Rubbish Type Statistics</Text>
        

        <Echarts option={option} height={350} width={width}/>
      
      <TouchableOpacity style={styles.Btn} onPress={this._Collect.bind(this)}>
          <Text>Collect</Text>
        </TouchableOpacity>

       


      </Image>

)

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

  titleView:{
    height:Platform.OS=='ios'?64:44,
    paddingTop:Platform.OS=='ios'?14:0,
    backgroundColor:'#ff6400',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

  },
  title:{
    color:'white',
    fontSize:20,
    textAlign:'center',

  },
  Btn:{
    width: 60,
    height: 20,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'lightblue'


  },
});

