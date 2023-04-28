import React from "react";
import { render, screen } from '@testing-library/react';
import Modal from "./Modal";

describe('Modal Tests', () => {

	test("is visible when isOpen is true and its content is visible", () => {
		render(
			<Modal isOpen={true}
				contentBody={'Hello Jest'}
				onClose={() => { }}
			/>
		)
		expect(screen.getByTestId("modal")).toBeVisible();
		expect(screen.queryByText("Hello Jest")).toBeVisible();
	});

	test("is not visible when isOpen is false and its content is not visible", () => {
		render(
			<Modal isOpen={false}
				contentBody={'Hello Jest'}
				onClose={() => { }}
			/>
		)
		expect(screen.getByTestId("modal")).not.toBeVisible();
		expect(screen.queryByText("Hello Jest")).not.toBeVisible();
	});

	test("styles are customizable and applied to the modal element", () => {

		const modalAlign = "top";
		const modalBackground = "rgba(25, 25, 25, 0.75)";
		const modalMaxWidth = "700px";
		const modalRadius = "5px"; 
		const modalShadow = "0 0 30px #000"
		const background = "grey"; 

		render(
			<Modal isOpen={false}
				contentBody={'Hello Jest'}
				onClose={() => { }}
				background={background}
				modalAlign={modalAlign}
				modalBackground={modalBackground}
				modalMaxWidth={modalMaxWidth}
				modalRadius={modalRadius}
				modalShadow={modalShadow}
			/>
		)
		// test style behind modal
		const blocker = screen.getByTestId("blocker"); 
		expect(getComputedStyle(blocker).background === background).toBeTruthy(); 
		
		// test style modal
		const myModal = screen.getByTestId("modal"); 
		const style = getComputedStyle(myModal);
		expect(style.verticalAlign === modalAlign).toBeTruthy(); 
		expect(style.maxWidth === modalMaxWidth).toBeTruthy(); 
		expect(style.background === modalBackground).toBeTruthy();
		expect(style.borderRadius === modalRadius).toBeTruthy();
		expect(style.boxShadow === modalShadow).toBeTruthy();
	});

	
}); 