import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { StyledButton, StyledButtonText } from "../StyledComponents";



const[bgColor, setByColor] = useState('#FFF');

return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
     
      <Button title="Red" onPress={() => setBgColor('red')} />
      <Button title="Blue" onPress={() => setBgColor('blue')} />
      <Button title="Green" onPress={() => setBgColor('green')} />
      
      <StatusBar style="auto" />
    </View>
  );
 export default Colorz;