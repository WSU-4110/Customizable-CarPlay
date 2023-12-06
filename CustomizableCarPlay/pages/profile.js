
import React, { Component,useContext } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { StyledButton, StyledButtonText } from "../StyledComponents";
import themeContext from "../components/themeContext";


function Profile() {

  const theme = useContext(themeContext); 
 
    return (
      <View>
        <ScrollView>
          <View style={{padding:10, width:'100%', backgroundColor:'#000', height:150}}>
            <TouchableOpacity>
              <Image source={require("../images/mater.png")} style={{ width:30, height:30 }}/>
              <View></View>
              <View></View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={require("../images/mater.png")} style={{width:140, height:140, borderRadius:100, marginTop:-70}}/>
            <Text style={{fontSize:25, fontWeight:'bold', padding:10, color: theme.color}}>Mater the Impaler</Text>
            <Text style={{fontSize:15, fontWeight:'bold',color: theme.color}} >25, Male</Text>
          </View>
          
<View style={{alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  
  width: '90%',
  padding: 20,
  paddingBottom: 22,
  borderRadius: 10,
  elevation: 15,
  marginTop: 20,
  backgroundColor: theme.background}}>
<Image source={require('../images/profile.png')} style={{ width: 20, height: 20 }}/>
<Text style ={{color: theme.color, marginLeft:10}}>Moin Syed</Text>
</View>
<View style={{alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  
  width: '90%',
  padding: 20,
  paddingBottom: 22,
  borderRadius: 10,
  elevation: 15,
  marginTop: 20,
  backgroundColor: theme.background}}>
    <Image source={require('../images/car.png')} style={{ width: 20, height: 20}}/>
<Text style ={{color: theme.color, marginLeft: 10}}>Honda Civic Sport 2023</Text>
</View>
<View style={{alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  
  width: '90%',
  padding: 20,
  paddingBottom: 22,
  borderRadius: 10,
  elevation: 15,
  marginTop: 20,
  backgroundColor: theme.background}}>
   <Image source={require('../images/gas-pump.png')} style={{ width: 20, height: 20, color: theme.color }}/>
<Text style ={{color: theme.color, marginLeft: 10}}>Miles Driven: 19073</Text>
</View>


        </ScrollView>
      </View>


    )
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      text: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 20,
      },
      button :{
        paddingTop: 20,
      },
    })

    
  
}

export default Profile;

