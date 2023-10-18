import React from "react";
import styled from "styled-components/native";
import { Footer } from "../components/footer";

const Container = styled.View`
  flex: 1;
  background-color: #3c3c3c;
`;

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WhiteText = styled.Text`
  color: #ffffff;
  font-size: 24px;
`;

const Button = styled.TouchableOpacity`
  background-color: #b0cac7;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 5px;
  margin-top: 20px;

  /* iOS Shadow Props */
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;

  /* Android Shadow */
  elevation: 4;
`;

const ButtonText = styled.Text`
  color: #000000i;
  font-size: 18px;
`;



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
