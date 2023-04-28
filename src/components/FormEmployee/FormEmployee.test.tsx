import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormEmployee from "./FormEmployee";
import { statesData, departementsData } from "../../data/staticData";

describe("Form Employee", () => {

	
	test("should be visible", () => {
		const states: Array<string> = statesData.map((value) => { return value['name'] });
		render(<FormEmployee departements={departementsData} states={states} />)

		expect(screen.getByTestId("form-employee")).toBeVisible();
	})

	test("should be able to fill data and submit", async () => {
		const states: Array<string> = statesData.map((value) => { return value['name'] });
		render(<FormEmployee departements={departementsData} states={states} />)

		const firstName = screen.getByRole("textbox", { name:  "First Name" });
		const lastName = screen.getByRole("textbox", { name: "Last Name" });
		const zipCode = screen.getByRole("spinbutton", { name: "Zip Code" });
		const city = screen.getByRole("textbox", { name: "City" });
		const street = screen.getByRole("textbox", { name: "Street" });
		const birthDate = screen.getByRole("textbox", { name: "Date of Birth" });
		const startDate = screen.getByRole("textbox", { name: "Start Date" });

		const testString = "TEST_FORM";
		fireEvent.change(firstName, { target: { value: testString } })
		fireEvent.change(lastName, { target: { value: testString } })
		fireEvent.change(zipCode, { target: { value: "00000" } })
		fireEvent.change(startDate, { target: { value: "01/01/1990" } })
		fireEvent.change(birthDate, { target: { value: "01/01/1900" } })
		fireEvent.change(city, { target: { value: testString } })
		fireEvent.change(street, { target: { value: testString } })

		expect(firstName).toHaveDisplayValue(testString);
		expect(lastName).toHaveDisplayValue(testString);
		expect(zipCode).toHaveDisplayValue("00000");
		expect(startDate).toHaveDisplayValue("01/01/1990");
		expect(birthDate).toHaveDisplayValue("01/01/1900");
		expect(city).toHaveDisplayValue(testString);
		expect(street).toHaveDisplayValue(testString);

		fireEvent.click(screen.getByText('Save'))
		const Sucessful = await screen.findByText('Employee Created!');
		expect(Sucessful).toBeInTheDocument();

	})


	test("should not allow string at BirthDate,StartDate,ZipCode", async () => {


	})

});

