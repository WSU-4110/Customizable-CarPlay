jest.mock("@react-navigation/native", () => {
  return {
    useFocusEffect: () => {},
    useNavigation: () => {},
  };
});
