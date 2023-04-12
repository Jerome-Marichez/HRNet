import "./FormEmployee.scss";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import { Form, Field } from 'react-final-form'

interface FormEmployeeProps {
	states: Array<string>;
	departements: Array<string>;
}

/**
 * 
 * @param states A array of string who contains all States
 * @param departements A array of string who contains all Departements
 * @returns A Form Component which allow to create a Employee
 */
export default function FormEmployee({ states, departements }: FormEmployeeProps): JSX.Element {

	const [birthDate, setBirthDate] = useState<Date>(new Date());
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [state, setState] = useState<String>(departements[0]);
	const [departement, setDepartement] = useState<String>(states[0]);


	const onSubmit = (values: any) => {
		console.log({ values });
		console.log(birthDate);
		console.log(startDate);
		console.log(departement);
		console.log(state);
	}


	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, values }) => (
				<form onSubmit={handleSubmit}>
					<div className="container-two">
						<label htmlFor="first-name">First Name</label>
						<label htmlFor="last-name">Last Name</label>
					</div>
					<div className="container-two">
						<Field type="text" component="input" name="first-name" />
						<Field type="text" component="input" name="last-name" />
					</div>

					<div className="container-two">
						<label htmlFor="date-of-birth">Date of Birth</label>
						<label htmlFor="start-date">Start Date</label>
					</div>
					<div className="container-two">
						<DatePicker selected={birthDate} onChange={(birthDate: Date) => setBirthDate(birthDate)} />
						<DatePicker selected={startDate} onChange={(startDate: Date) => setStartDate(startDate)} />
					</div>

					<fieldset className="address">
						<legend>Address</legend>

						<label htmlFor="street">Street</label>
						<Field type="text" component="input" name="street" />

						<label htmlFor="city">City</label>
						<Field type="text" component="input" name="city" />

						<label htmlFor="state">State</label>
						<Dropdown
							className="dropdown"
							controlClassName="dropdown-control"
							options={states}
							placeholder={states[0]}
							onChange={(state) => setState(state.value)}
							arrowClosed={<div>⮟</div>}
							arrowOpen={<div>⮝</div>}
						/>

						<label htmlFor="zip-code">Zip Code</label>
						<Field component="input" type="number" name="zipCode" />
					</fieldset>

					<label htmlFor="department">Department</label>
					<Dropdown
						className="dropdown"
						controlClassName="dropdown-control"
						options={departements}
						placeholder={departements[0]}
						onChange={(departement) => setDepartement(departement.value)}
						arrowClosed={<div>⮟</div>}
						arrowOpen={<div>⮝</div>}
					/>

					<button>Save</button>
				</form>
			)} />
	);
}