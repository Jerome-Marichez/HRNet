import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TableEmployee from './TableEmployee';
import { randomInt } from 'crypto';

describe('TableEmployee Tests', () => {

	const columnsTest: Array<string> = ["firstName", "lastName"];
	const rowsTest: Array<Array<string>> = [['paul', 'marculi'], ['thomas', 'tunizi']];

	test('Pagination Feature', async () => {
		const paginationRange = [5, 10, 25, 50, 100];
		const rowsTestPagination = new Array(500).fill(['jack', 'test']);
		
		// Select a Random Index 
		const randomIndex = randomInt(0, paginationRange.length);

		render(<TableEmployee
			columnsValues={columnsTest}
			rowsValues={rowsTestPagination}
			paginationRange={paginationRange}
		/>, { wrapper: BrowserRouter });

		const select: HTMLElement = screen.getByTestId('pagination');
		expect(select).toBeVisible();

		fireEvent.change(select, { target: { value: paginationRange[randomIndex] } })

		const grid: HTMLElement = screen.getByRole('grid');
		expect(grid).toBeInTheDocument();

		// Expect pagination work
		const td = await screen.findAllByText("jack");
		expect(td.length === paginationRange[randomIndex]).toBeTruthy(); 

		const td2 = await screen.findAllByText("test");
		expect(td2.length === paginationRange[randomIndex]).toBeTruthy(); 
	});

	test('Zoom Feature', async () => {
		const zoomRange = [5, 10, 25, 50, 100];

		// Select a Random Index 
		const randomIndex = randomInt(0, zoomRange.length);

		render(<TableEmployee
			columnsValues={columnsTest}
			rowsValues={rowsTest}
			zoomRange={zoomRange}
		/>, { wrapper: BrowserRouter });

		const select: HTMLElement = screen.getByTestId("zoom");
		expect(select).toBeVisible();

		fireEvent.change(select, { target: { value: zoomRange[randomIndex] } })
		const grid: HTMLElement = screen.getByRole('grid');

		// Expect grid still be visible after Zoom function
		expect(grid).toBeVisible();
	});

	test('Table is visible and his <th> <td> ?', async () => {
		render(<TableEmployee
			columnsValues={columnsTest}
			rowsValues={rowsTest}
		/>, { wrapper: BrowserRouter });

		// Does <Grid/> is in the Document ? 
		const grid: HTMLElement = screen.getByRole('grid');
		expect(grid).toBeInTheDocument();

		// <td> is in the Document ? 
		const td = await screen.findByText("paul");
		const td2 = await screen.findByText("marculi");
		expect(td).toBeVisible();
		expect(td2).toBeVisible();

		// <th> is in the Document ? 
		const th = await screen.findByText("firstName");
		const th2 = await screen.findByText("lastName");
		expect(th).toBeVisible();
		expect(th2).toBeVisible();
	});

	
}); 