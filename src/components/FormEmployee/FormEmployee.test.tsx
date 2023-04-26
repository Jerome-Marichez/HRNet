import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormEmployee from "./FormEmployee";
import { statesData, departementsData } from "../../data/staticData";
import { prettyDOM } from "@testing-library/react";
import insertDB from "../../data/database";

describe("Form Employee Test", () => {

	test("Form Employee should be visible", () => {

		const states: Array<string> = statesData.map((value) => { return value['name'] });
		render(<FormEmployee departements={departementsData} states={states} />)

		expect(screen.getByTestId("form-employee")).toBeVisible();

	})

	test("Form Employee should submit and data should be registered", async () => {
		
		const states: Array<string> = statesData.map((value) => { return value['name'] });
		render(<FormEmployee departements={departementsData} states={states} />)

		const firstName = screen.getByLabelText("First Name");
		const lastName = screen.getByLabelText("Last Name");
		const zipCode = screen.getByLabelText("Zip Code");
		const city = screen.getByLabelText("City");
		const street = screen.getByLabelText("Street");
		const birthDate = screen.getByLabelText("Date of Birth");
		const startDate = screen.getByLabelText("Start Date");


		fireEvent.change(firstName, { target: { value: "test_form" } })
		fireEvent.change(lastName, { target: { value: "test_form" } })
		fireEvent.change(zipCode, { target: { value: "00000" } })
		fireEvent.change(startDate, { target: { value: "01/01/1990" } })
		fireEvent.change(birthDate, { target: { value: "01/01/1900" } })
		fireEvent.change(city, { target: { value: "test_form" } })
		fireEvent.change(street, { target: { value: "test_form" } })

		fireEvent.submit(screen.getByTestId("form-employee"));
		
	})
});

