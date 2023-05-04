import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { employeePath } from "../utils/routesPath";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
	it("renders the HRnet title & View Current Employees link", async() => {
		render(<Home />, { wrapper: BrowserRouter });
		const titleElement = screen.getByText("HRnet");
		expect(titleElement).toBeVisible();

		const linkElement = await screen.findByText("View Current Employees");
		expect(linkElement).toBeVisible();
		expect(linkElement.getAttribute("href")).toBe(`/${employeePath}`);
	});
});
