import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeList from './EmployeeList';
import { readDB } from '../data/database';


describe('EmployeeList', () => {

	test('Display a loading message while the data is being fetched, then display "Current Employees" when the data is ready.', async () => {
		jest.spyOn(require('../data/database'), 'readDB').mockReturnValue([{ employee: "John" }, { employee: "Smith" }]);

		render(<EmployeeList />);
		const h2Element = screen.getByText('Loading 🖳');
		expect(await screen.findByText('Current Employees')).toBeVisible();
		setTimeout(() => 500);
		expect(h2Element).not.toContainHTML("Error");
	});

test('Display a loading message while attempting to read the database, then display an error message if there is an error', async () => {
		jest.spyOn(require('../data/database'), 'readDB').mockReturnValue(false);

		render(<EmployeeList />);
		expect(screen.getByText('Loading 🖳')).toBeVisible();
		expect(await screen.findByText('Error cannot access data 😭')).toBeVisible();
	});

});
