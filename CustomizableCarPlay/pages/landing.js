import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const LandingFactory = () => ({
  createHeader: () => <Text style={styles.headerText}>Default Header</Text>,
  createBody: () => <Text style={styles.middleText}>Default Body</Text>,
});

export const WelcomeDisplayFactory = (navigateToHome) => ({
  createHeader: () => (
    <Text style={styles.headerText}>CustomizableCarPlay</Text>
  ),
  createBody: () => (
    <>
      <Text style={styles.middleText}>Welcome To Dell</Text>
      <Text style={styles.subText}>Please Stay Safe Today</Text>
      <TouchableOpacity style={styles.startButton} onPress={navigateToHome}>
        <Text style={styles.buttonText}>Tap to Start</Text>
      </TouchableOpacity>
    </>
  ),
});

export const Landing = ({ factory }) => {
  const Header = factory.createHeader();
  const Body = factory.createBody();
  return (
    <ImageBackground
      source={require("./../assets/main_bg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.headerContainer}>{Header}</View>
      <View style={styles.middleContainer}>{Body}</View>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "rgba(128, 0, 128, 0.8)",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    borderRadius: 20,
    position: "absolute",
    top: height * 0.05,
  },
  headerText: { fontSize: 32, fontWeight: "bold", color: "#E1FF00" },
  middleContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 69, 0, 0.8)",
    padding: height * 0.03,
    borderRadius: 30,
    elevation: 5,
  },
  middleText: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20,
    color: "#00FF7F",
  },
  subText: { fontSize: 26, marginBottom: 30, color: "#1E90FF" },
  startButton: {
    backgroundColor: "#FF4500",
    padding: 20,
    borderRadius: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonText: { color: "white", fontSize: 24, fontWeight: "bold" },
});

export default function App() {
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate("Home");
  };
  const welcomeFactory = WelcomeDisplayFactory(navigateToHome);
  return <Landing factory={welcomeFactory} />;
}
