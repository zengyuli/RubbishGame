import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Image
} from 'react-native';

var getUrl = "http://localhost:3000/test?search=nraboy"
var postUrl = "http://localhost:3000/test"

export default class Collect extends Component {

constructor(props) {
  super(props);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {r1 !== r2}});  
        this.state = {  
            dataSource: ds,  
            load:false,  
            text:''  
        };  
    }  
    postRequest() {
      alert(this.props)
     
      fetch('http://localhost:3000/test', {
        method: 'post',
        body: JSON.stringify({
          
          secret: 'MJUY8E',
          waste_statistics: 
            {
              category: "waste",
              selected: 1
            },
            
          bin_statistics: {
            generral:3,
            recycle:6,
            hazardous:5,
            compostable: 1
          }
        })
      })
   


    }
     componentDidMount(){  
        // this.postRequest();  
    
    
    }
  
    

getRequest(){
  alert(this.props)
  fetch('http://localhost:3000/test?search=nraboy')
  .then((response)=>response.json())
  .then((responseJSON)=>{
    this.setState({
      load:true,
      dataSource: this.state.dataSource.cloneWithRows(responseText.results),  
    })
  })
  .catch((error) => {  
                console.warn(error);  
            }).done(); 
}

  render() {
    
      return (
     <Image source={require('./Image/back.jpg')} style={styles.container}>

      <TouchableOpacity onPress={() => this.getRequest()}>  
                    <View style={styles.btn}>  
                        <Text>GET</Text>  
                    </View>  
                </TouchableOpacity>  


      <TouchableOpacity onPress={() => this.postRequest()}>  
                    <View style={styles.btn}>  
                        <Text>POST</Text>  
                    </View>  
                </TouchableOpacity>            


      
        
      </Image>
      
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
    width:null,
    height:null,
  },
  btn:{
    width: 60,
    height: 25,
    marginTop: 60,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'gold'
  },
});
