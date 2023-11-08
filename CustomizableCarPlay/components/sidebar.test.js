import React from "react";
import { Animated, Text } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import Sidebar from "./customSideBar";
import LayoutContext from "./LayoutContext";

// Mock the Animated module
jest.spyOn(Animated, "timing").mockImplementation(() => ({
  start: jest.fn(),
}));

describe("Sidebar", () => {
  const mockToggleLayout = jest.fn();
  const mockOnClose = jest.fn();

  it("should animate and show when isVisible is true", () => {
    const { getByText } = render(
      <LayoutContext.Provider value={{ toggleLayout: mockToggleLayout }}>
        <Sidebar isVisible={true} onClose={mockOnClose} />
      </LayoutContext.Provider>
    );

    expect(getByText("Customize")).toBeTruthy();
    expect(Animated.timing).toHaveBeenCalledWith(expect.anything(), {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    });
  });

  it("should call toggleLayout and onClose when the button is pressed", () => {
    const { getByText } = render(
      <LayoutContext.Provider value={{ toggleLayout: mockToggleLayout }}>
        <Sidebar isVisible={true} onClose={mockOnClose} />
      </LayoutContext.Provider>
    );

    fireEvent.press(getByText("Swap Background"));
    expect(mockToggleLayout).toHaveBeenCalled();
    expect(mockOnClose).toHaveBeenCalled();
  });
});
