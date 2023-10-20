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
