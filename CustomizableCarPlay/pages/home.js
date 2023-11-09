import React, { useState } from "react";
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

function Home() {
  const [layout, setLayout] = useState("layoutOne");

  const onPressStartDriving = () => {
    console.log("Start Driving Pressed!");
  };

  const toggleLayout = () => {
    if (layout === "layoutOne") {
      setLayout("layoutTwo");
    } else {
      setLayout("layoutOne");
    }
  };

  const getBackgroundImage = () => {
    return layout === "layoutOne" ? BackgroundImage : SecondBackgroundImage;
  };

  return (
    <ImageBackground source={getBackgroundImage()} style={{ flex: 1 }}>
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
      <TouchableOpacity
        onPress={toggleLayout}
        style={{ position: "absolute", right: 10, top: 10, padding: 10 }}
      >
        <WhiteText style={{ fontSize: 14 }}>Swap Layout</WhiteText>
      </TouchableOpacity>
      <Footer />
    </ImageBackground>
  );
}

export default Home;
