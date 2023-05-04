import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { employeePath } from "../utils/routesPath";
import { BrowserRouter } from "react-router-dom";

describe("Home Page", () => {
	it("renders the HRnet title & View Current Employees link", () => {
		render(<Home />, { wrapper: BrowserRouter });
		expect(screen.getByText("HRnet")).toBeVisible();

		const linkElement = screen.getByText("View Current Employees");
		expect(linkElement).toBeVisible();
		expect(linkElement.getAttribute("href")).toBe(`/${employeePath}`);
	});
});
