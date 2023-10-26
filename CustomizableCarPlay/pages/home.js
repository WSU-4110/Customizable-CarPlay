import React from "react";
import { Footer } from "../components/footer";
import DraggableIcon from "../components/draggableIcon";
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

function Home() {
  const onPressStartDriving = () => {
    console.log("Start Driving Pressed!");
  };

  return (
    <Container>
      <CenteredView>
        <WhiteText>CustomizableCarPlay!</WhiteText>
        <Button onPress={onPressStartDriving}>
          <ButtonText>Start Driving</ButtonText>
        </Button>
        <DraggableIcon source={spotifyIcon} />
        <DraggableIcon source={instagramIcon} />
        <DraggableIcon source={mapIcon} />
        <DraggableIcon source={tikTokIcon} />
        <DraggableIcon source={weatherIcon} />
        <DraggableIcon source={whatsAppIcon} />
      </CenteredView>

      <Footer />
    </Container>
  );
}

export default Home;
