import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TableEmployee from './TableEmployee';
import { randomInt } from 'crypto';

describe('TableEmployee Tests', () => {

	const columnsTest: Array<string> = ["firstName", "lastName"];
	const rowsTest: Array<Array<string>> = [['paul', 'marculi'], ['thomas', 'tunizi']];
	rowsTest.concat(Array(500).fill(['x', 'x']));

	test('Table is visible ?', async () => {
		render(<TableEmployee
			columnsValues={columnsTest}
			rowsValues={rowsTest}
		/>, { wrapper: BrowserRouter });

		// Does <Grid/> is in the Document ? 
		const grid: HTMLElement = screen.getByRole('grid');
		expect(grid).toBeInTheDocument();
	});

	test('Pagination Feature', async () => {
		const paginationRange = [5, 10, 25, 50, 100];

		// Select a Random Index 
		const randomIndex = randomInt(0, paginationRange.length);

		render(<TableEmployee
			columnsValues={columnsTest}
			rowsValues={rowsTest}
			paginationRange={paginationRange}
		/>, { wrapper: BrowserRouter });

		const select: HTMLElement = screen.getByTestId("pagination");
		fireEvent.change(select, { target: { value: paginationRange[randomIndex] } })
		// Can't count <td> number since <Grid/> is a private component
	});



}); 