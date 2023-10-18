import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #3c3c3c;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WhiteText = styled.Text`
  color: #ffffff;
  font-size: 24px;
`;

export const Button = styled.TouchableOpacity`
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

export const ButtonText = styled.Text`
  color: #000000;
  font-size: 18px;
`;
