import React, { ReactElement } from "react";
//import '@testing-library/jest-dom'
import { describe, test, expect } from "vitest";
import { ThemeProvider } from "styled-components";
import { ContactForm } from "~/components/forms";
import { within } from "@testing-library/dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

const theme = {
  colors: {
    primary: "#28A745",
    primaryHover: "#1f8236",
    secondary: "#333333",
    placeholder: "#808080",
    accent: "#0284D0",
    error: "#a32e1c",
    bgPrimary: "#E5E5E5",
    bgSecondary: "#F4F4F4",
  },
};

describe("contact form validation test", () => {
  render(
    <ThemeProvider theme={theme}>
      <ContactForm />
    </ThemeProvider>
  );
  test("name validation test", async () => {
    const correctNameCases = ["John-James Dou", "aboba", "Albert   Einstein"];
    const notValidNameCases = ["John123", "John_John", "2", "  ", "John$#@#!%"];

    const nameInput = screen.getByPlaceholderText("Enter your name");
    const nameLabel = screen.getByTestId("nameLabel");

    fireEvent.change(nameInput, {
      target: { value: '' },
    });
    fireEvent.focusOut(nameInput);
    expect(nameInput.className.includes("--error")).toBe(true);
    expect(nameLabel.className.includes("--visible")).toBe(true);
    const { getByText } = within(nameLabel);
    expect(getByText("Field must not be empty")).toBeDefined();

    for (let testCase of correctNameCases) {
      fireEvent.change(nameInput, {
        target: { value: testCase },
      });
      fireEvent.focusOut(nameInput);
      expect(nameInput.className.includes("--error")).toBe(false);
    }

    for (let testCase of notValidNameCases) {
      fireEvent.change(nameInput, {
        target: { value: testCase },
      });
      fireEvent.focusOut(nameInput);
      expect(nameInput.className.includes("--error")).toBe(true);
      expect(nameLabel.className.includes("--visible")).toBe(true);
      const { getByText } = within(nameLabel);
      expect(getByText("Please enter a real name")).toBeDefined();
    }
  });

  test("email validation test", async () => {
    const correctEmailCases = ["test@test.agency", "john.dou@gmail.com",];
    const notValidEmailCases = ["John123", "a.a","asd@das.123", "2", "  ", "John$#@d.#!%"];

    const emailInput = screen.getByPlaceholderText("Enter email*");
    const emailLabel = screen.getByTestId("emailLabel");

    fireEvent.change(emailInput, {
      target: { value: '' },
    });
    fireEvent.focusOut(emailInput);
    expect(emailInput.className.includes("--error")).toBe(true);
    expect(emailLabel.className.includes("--visible")).toBe(true);
    const { getByText } = within(emailLabel);
    expect(getByText("Field must not be empty")).toBeDefined();

    for (let testCase of correctEmailCases) {
      fireEvent.change(emailInput, {
        target: { value: testCase },
      });
      fireEvent.focusOut(emailInput);
      expect(emailInput.className.includes("--error")).toBe(false);
    }

    for (let testCase of notValidEmailCases) {
      fireEvent.change(emailInput, {
        target: { value: testCase },
      });
      fireEvent.focusOut(emailInput);
      expect(emailInput.className.includes("--error")).toBe(true);
      expect(emailLabel.className.includes("--visible")).toBe(true);
      const { getByText } = within(emailLabel);
      expect(getByText("Plaese enter a valid email")).toBeDefined();
    }
  });
});
