import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import App, {
  LandingFactory,
  Landing,
  WelcomeDisplayFactory,
} from "../../pages/landing";
jest.useFakeTimers();
describe("Unit Testing Langing Page", () => {
  let landingPage;
  beforeAll(() => {
    landingPage = renderer.create(<App />).toJSON();
  });

  it("It has 3 children", () => {
    expect(landingPage.children.length).toBe(3);
  });
  it("Renders the default header", () => {
    const { getByText } = render(<Landing factory={LandingFactory()} />);
    const headerElement = getByText("Default Header");
    expect(headerElement).toBeTruthy();
  });
  it("Landing Page Container Style Test", () => {
    expect(landingPage.props.style).toStrictEqual({
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
      resizeMode: "cover",
    });
  });
  it("Renders the customizable header", () => {
    const { getByText } = render(
      <Landing factory={WelcomeDisplayFactory(() => {})} />
    );
    const headerElement = getByText("CustomizableCarPlay");
    expect(headerElement).toBeTruthy();
  });
  it("renders the customizable body", () => {
    const { getByText } = render(
      <Landing factory={WelcomeDisplayFactory(() => {})} />
    );
    const welcomeText = getByText("Welcome To Dell");
    const staySafeText = getByText("Please Stay Safe Today");
    const startButton = getByText("Tap to Start");

    expect(welcomeText).toBeTruthy();
    expect(staySafeText).toBeTruthy();
    expect(startButton).toBeTruthy();
  });

  it("triggers navigateToHome function on button click", () => {
    const navigateToHome = jest.fn();
    const { getByText } = render(
      <Landing factory={WelcomeDisplayFactory(navigateToHome)} />
    );
    const startButton = getByText("Tap to Start");

    fireEvent.press(startButton);

    expect(navigateToHome).toHaveBeenCalled();
  });
});
