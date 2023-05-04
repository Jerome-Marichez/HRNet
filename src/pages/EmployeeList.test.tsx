import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeList from './EmployeeList';
import { readDB } from '../data/database';



describe('EmployeeList', () => {

	test('displays loading message then "Current Employees" when data is being fetched', async () => {
		render(<EmployeeList />);
		expect(screen.getByText('Loading 🖳')).toBeVisible();
		expect(await screen.findByText('Current Employees')).toBeVisible();
	});

	test('displays loading message then a error message', async () => {
		jest.mock('../data/database', () => ({
			readDB: jest.fn(() => false)
		}));
		
		render(<EmployeeList />);
		expect(screen.getByText('Loading 🖳')).toBeVisible();
		expect(await screen.findByText('Error cannot access data 😭')).toBeVisible();
	});

});
