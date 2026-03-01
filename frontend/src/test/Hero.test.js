import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../landing_page/home/Hero";
import { MemoryRouter } from "react-router-dom";

// Test Suite

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const HeroImage = screen.getByAltText("heroImage");
    expect(HeroImage).toBeInTheDocument();
    expect(HeroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders signup link", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const SignUpButton = screen.getByRole("link", {name: /signup for free/i});
    expect(SignUpButton).toBeInTheDocument();
    expect(SignUpButton).toHaveAttribute("href", "/signup");
    expect(SignUpButton).toHaveClass("btn-primary");
  });
});
