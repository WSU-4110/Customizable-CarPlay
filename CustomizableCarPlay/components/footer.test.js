import { render, fireEvent, waitFor } from "@testing-library/react-native";
import React from "react";
import { Footer } from "./footer";
import { Alert } from "react-native";

jest.mock("react-native-vector-icons/Ionicons", () => {
  return {
    __esModule: true,
    default: () => {
      return <></>;
    },
  };
});
jest.mock("react-native", () => {
  const actualRN = jest.requireActual("react-native");
  return {
    ...actualRN,
    Alert: {
      ...actualRN.Alert,
      alert: jest.fn(),
    },
  };
});

jest.mock("react-native/Libraries/Settings/Settings", () => {
  return {
    get: jest.fn(),
    set: jest.fn(),
    watchKeys: jest.fn(),
    clearWatch: jest.fn(),
  };
});
jest.mock("react-native", () => {
  const actualRN = jest.requireActual("react-native");
  return {
    ...actualRN,
    Alert: {
      ...actualRN.Alert,
      alert: jest.fn(),
    },
  };
});
describe("Footer Component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-bar")).toBeTruthy();
  });

  it("toggles the sidebar visibility when the corresponding footer item is pressed", async () => {
    const { getByTestId, findByTestId } = render(<Footer />);

    const toggleButton = getByTestId("toggle-sidebar-button");

    fireEvent.press(toggleButton);

    const sidebar = await getByTestId("custom-sidebar");
    expect(sidebar).toBeTruthy();

    fireEvent.press(toggleButton);

    expect(sidebar).toBeTruthy();
  });

  it("renders the correct number of footer items", () => {
    const { getAllByTestId } = render(<Footer />);
    const footerItems = getAllByTestId("footer-item");
    expect(footerItems.length).toBe(3);
  });

  it("calls showPlaceholderAlert when non-toggle footer items are pressed", () => {
    const alertSpy = jest.spyOn(Alert, "alert");
    const { getByTestId } = render(<Footer />);

    // Corrected to match the testID from the component
    const profileButton = getByTestId("sidebar-toggle");
    fireEvent.press(profileButton);

    expect(alertSpy).toHaveBeenCalledWith(
      "Under Construction",
      "This feature is not available yet."
    );
  });
});
