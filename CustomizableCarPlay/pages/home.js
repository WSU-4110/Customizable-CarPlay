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
import instagramIcon from "../images/instagramIcon";
import mapIcon from "../images/mapIcon";
import TikTokIcon from "../images/TikTokIcon";
import weatherIcon from "../images/weatherIcon";
import whatsAppIcon from "../images/whatsAppIcon";

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
      </CenteredView>

      <Footer />
    </Container>
  );
}

export default Home;
