import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Landing() {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground source={require('./../assets/main-bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>CustomizableCarPlay</Text>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.middleText}>Welcome To Dell</Text>
        <Text style={styles.subText}>Please Stay Safe Today</Text>
        <TouchableOpacity style={styles.startButton} onPress={navigateToHome}>
          <Text style={styles.buttonText}>Tap to Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  headerContainer: {
    backgroundColor: 'rgba(128, 0, 128, 0.6)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    position: "absolute",
    top: 50
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#E1FF00"
  },
  middleContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(255, 69, 0, 0.6)',
    padding: 20,
    borderRadius: 12
  },
  middleText: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
    color: "#00FF7F"
  },
  subText: {
    fontSize: 20,
    marginBottom: 30,
    color: "#1E90FF"
  },
  startButton: {
    backgroundColor: "#FF4500",
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  buttonText: {
    color: "white",
    fontSize: 20
  }
});
