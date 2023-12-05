import React, { useState, useContext } from "react";
import { Footer } from "../components/footer";
import DraggableIcon from "../components/draggableIcon";
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Linking,
} from "react-native";
import {
  WhiteText,
  CenteredView,
  Button,
  Container,
  ButtonText,
} from "../stylePages/homePage";
import spotifyIcon from "../images/spotifyIcon.png";
import instagramIcon from "../images/InstagramIcon.png";
import mapIcon from "../images/MapsIcon.png";
import tikTokIcon from "../images/TikTokIcon.png";
import weatherIcon from "../images/weatherIcon.png";
import whatsAppIcon from "../images/WhatsAppIcon.png";
import BackgroundImage from "../images/bghomepage.png";
import SecondBackgroundImage from "../images/pacmanBG.png";
import LayoutContext from "../components/LayoutContext";
import DefaultBackgroundImage from "../images/default.png";
import WayneStateImage from "../images/wsu.png";

function Home() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { layout, toggleLayout } = useContext(LayoutContext);

  const onPressStartDriving = () => {
    console.log("Start Driving Pressed!");
  };

  const openSpotify = () => {
    const url = "https://spotify.com";
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open Spotify:", err);
    });
  };

  const openWeather = () => {
    const url = "https://www.weather.com";
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open website:", err);
    });
  };

  const openTikTok = () => {
    const url = "https://www.tiktok.com";
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open website:", err);
    });
  };
  const openWhatsApp = () => {
    const url = "https://www.whatsapp.com";
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open website:", err);
    });
  };

  const openMaps = () => {
    const url = "https://maps.google.com";
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open website:", err);
    });
  };

  const Instagram = () => {
    const url = "https://www.instagram.com";
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open website:", err);
    });
  };

  const getBackgroundImage = () => {
    let image;
    switch (layout) {
      case "Default":
        image = DefaultBackgroundImage;
        break;
      case "layoutOne":
        image = BackgroundImage;
        break;
      case "layoutTwo":
        image = SecondBackgroundImage;
        break;
      case "layoutThree":
        image = WayneStateImage;
        break;
    }
    console.log(`Current background image: ${image}`);
    return image;
  };

  return (
    <ImageBackground
      source={getBackgroundImage()}
      style={{ flex: 1 }}
      key={layout}
    >
      <CenteredView>
        <DraggableIcon
          source={spotifyIcon}
          initialPosition={{ x: -170, y: -100 }}
          onPress={openSpotify}
        />
        <DraggableIcon
          source={instagramIcon}
          initialPosition={{ x: -170, y: -80 }}
          onPress={Instagram}
        />
        <DraggableIcon
          source={mapIcon}
          initialPosition={{ x: -170, y: -60 }}
          onPress={openMaps}
        />
        <DraggableIcon
          source={tikTokIcon}
          initialPosition={{ x: -170, y: -40 }}
          onPress={openTikTok}
        />
        <DraggableIcon
          source={weatherIcon}
          initialPosition={{ x: -170, y: -20 }}
          onPress={openWeather}
        />
        <DraggableIcon
          source={whatsAppIcon}
          initialPosition={{ x: -170, y: 0 }}
          onPress={openWhatsApp}
        />
        <View>
          <Button onPress={onPressStartDriving}>
            <ButtonText>Start Driving</ButtonText>
          </Button>
        </View>
      </CenteredView>
      <Footer />
    </ImageBackground>
  );
}

export default Home;
