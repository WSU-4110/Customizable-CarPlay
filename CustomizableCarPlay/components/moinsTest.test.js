import React from "react";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
// Landing.test.js
import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Landing from "./pages/landing";
import render from "@testing-library/react-native";
import cleanup from "@testing-library/react-native";
import React from "react";
import App from "./App";
import { EventRegister } from "react-native-event-listeners";
import theme from "./theme";

jest.mock("@react-navigation/native");
jest.mock("@react-navigation/stack");

import AppNavigator from "./AppNavigator";

describe("AppNavigator", () => {
  it("should have the Register screen as the initial route", () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    expect(getByTestId("register-screen")).toBeTruthy();
  });
});

// Mock the external modules
jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock("react-native-event-listeners", () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

describe("Landing", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Landing />);
    expect(getByText("Landing page - Customized Car Play")).toBeTruthy();
  });

  it("navigates when the button is pressed", () => {
    const { getByText } = render(<Landing />);
    const navigateButton = getByText("Start");
    fireEvent.press(navigateButton);
    // Assuming you have a navigate function mocked above
    expect(mockNavigateFunction).toHaveBeenCalledWith("Home");
  });

  it("toggles the mode when the switch is flipped", () => {
    const { getByTestId } = render(<Landing />);
    const modeSwitch = getByTestId("mode-switch"); // Make sure you add testID="mode-switch" to your Switch component
    fireEvent.valueChange(modeSwitch, true);
    expect(modeSwitch.props.value).toBe(true); // This may not work as expected since fireEvent doesn't actually change component state
  });
});

describe("componenet of App", () => {
  afterEach(cleanup);

  it("registers and unregisters an event listener", () => {
    const { unmount } = render(<App />);

    expect(EventRegister.addEventListener).toHaveBeenCalledWith(
      "changeTheme",
      expect.any(Function)
    );

    unmount();

    expect(EventRegister.removeEventListener).toHaveBeenCalledWith(
      expect.anything()
    );
  });
});
describe("change color object", () => {
  test("includes light and dark", () => {
    expect(theme).toHaveProperty("light");
    expect(theme).toHaveProperty("dark");
  });

  test("light theme contains the correct properties", () => {
    expect(theme.light).toHaveProperty("theme", "light");
    expect(theme.light).toHaveProperty("color", "black");
    expect(theme.light).toHaveProperty("background", "white");
  });

  test("dark theme contains the correct properties", () => {
    expect(theme.dark).toHaveProperty("theme", "dark");
    expect(theme.dark).toHaveProperty("color", "white");
    expect(theme.dark).toHaveProperty("background", "black");
  });
});
jest.mock("react-native-event-listeners", () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));
