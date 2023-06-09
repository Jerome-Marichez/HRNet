import "./FormEmployee.scss";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import { Form, Field } from 'react-final-form';
import { Modal } from "jerome-react-modal";
import insertDB from "../../data/database";


interface FormEmployeeProps {
	states: Array<string>;
	departements: Array<string>;
}

/**
 * @param states A array of string that contains all States
 * @param departements A array of string that contains all Departements
 * @returns A Form Component which allow to create a Employee
 */
export default function FormEmployee({ states, departements }: FormEmployeeProps): JSX.Element {

	const [modalText, setModalText] = useState("");
	const [modalOpen, setModalOpen] = useState(false);


	const onSubmit = async (values: any) => {

		const requestDone = await insertDB(values);

		if (requestDone) {
			setModalText("Employee Created!")
		} else {
			/* istanbul ignore next */
			setModalText("Failed to create employee. Error occurred.")
		}

		setModalOpen(true);
	}

	return (
		<>
			<Form
				onSubmit={onSubmit}
				render={({ handleSubmit, values }) => (
					<form data-testid="form-employee" className="form-employee" onSubmit={handleSubmit}>
						<div className="container-two">
							<label htmlFor="firstName">First Name</label>
							<label htmlFor="lastName">Last Name</label>
						</div>
						<div className="container-two">
							<Field type="text" component="input" id="firstName" name="firstName" />
							<Field type="text" component="input" id="lastName" name="lastName" />
						</div>

						<div className="container-two">
							<label htmlFor="birthDate">Date of Birth</label>
							<label htmlFor="startDate">Start Date</label>
						</div>
						<div className="container-two">
							<Field name="birthDate">
								{({ input }) => (
									<DatePicker
										id="birthDate"
										name="birthDate"
										selected={input.value}
										onChange={(date: Date) => input.onChange(date)}
									/>
								)}
							</Field>
							<Field name="startDate">
								{({ input }) => (
									<DatePicker
										id="startDate"
										name="startDate"
										selected={input.value}
										onChange={(date: Date) => input.onChange(date)}
									/>
								)}
							</Field>
						</div>

						<fieldset className="address">
							<legend>Address</legend>

							<label htmlFor="street">Street</label>
							<Field type="text" component="input" id="street" name="street" />

							<label htmlFor="city">City</label>
							<Field type="text" component="input" id="city" name="city" />

							<label htmlFor="state">State</label>
							<Field id="state" name="state">
								{({ input }) => (
									<Dropdown
										className="dropdown"
										controlClassName="dropdown-control"
										options={states}
										value={input.value.label}
										onChange={(selected) => input.onChange(selected.value)}
										arrowClosed={<div>⮟</div>}
										arrowOpen={<div>⮝</div>}
									/>
								)}
							</Field>

							<label htmlFor="zipCode">Zip Code</label>
							<Field id="zipCode" component="input" type="number" name="zipCode" />
						</fieldset>

						<label htmlFor="department">Department</label>
						<Field id="departement" name="departement">
							{({ input }) => (
								<Dropdown
									className="dropdown"
									controlClassName="dropdown-control"
									options={departements}
									value={input.value}
									onChange={(selected) => input.onChange(selected.value)}
									arrowClosed={<div>⮟</div>}
									arrowOpen={<div>⮝</div>}
								/>
							)}
						</Field>
						<button>Save</button>
					</form>
				)}
			/>


			<Modal isOpen={modalOpen}
				contentBody={modalText}
				onClose={() => { setModalOpen(false); }}
			/>

		</>
	);
}