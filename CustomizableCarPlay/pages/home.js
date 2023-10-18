import React from "react";
import { Footer } from "../components/footer";

import {
  WhiteText,
  CenteredView,
  Button,
  Container,
  ButtonText,
} from "../stylePages/homePage";

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
      </CenteredView>

      <Footer />
    </Container>
  );
}

export default Home;
