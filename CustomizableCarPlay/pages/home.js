import React, { useState, useContext } from "react";
import { Footer } from "../components/footer";
import DraggableIcon from "../components/draggableIcon";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
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
          initialPosition={{ x: -170, y: 80 }}
        />
        <DraggableIcon
          source={instagramIcon}
          initialPosition={{ x: -170, y: 120 }}
        />
        <DraggableIcon source={mapIcon} initialPosition={{ x: -170, y: 160 }} />
        <DraggableIcon
          source={tikTokIcon}
          initialPosition={{ x: -170, y: 200 }}
        />
        <DraggableIcon
          source={weatherIcon}
          initialPosition={{ x: -170, y: 240 }}
        />
        <DraggableIcon
          source={whatsAppIcon}
          initialPosition={{ x: -170, y: 280 }}
        />
        <View
          style={{ flex: 1, justifyContent: "flex-end", marginBottom: 150 }}
        >
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
