import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeList from './EmployeeList';

describe('EmployeeList', () => {

	test('displays loading message when data is being fetched', async () => {
		render(<EmployeeList />);
		expect(screen.getByText('Loading 🖳')).toBeInTheDocument();
		expect(screen.getByText('Current Employees')).toBeInTheDocument();
	});
	
});
