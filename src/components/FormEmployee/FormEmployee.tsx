import "./FormEmployee.scss"; 
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';

interface selectValue {
	states: Array<string>; 
	departements: Array<string>; 
}

/**
 * 
 * @param states A array of string who contains all States
 * @param departements A array of string who contains all departements
 * @returns A Form Component which allow to create a Employee
 */
export default function FormEmployee({ states, departements } : selectValue) : JSX.Element { 
	const [birthDate, setBirthDate] = useState<Date>(new Date());
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [firstName,setFirstName] = useState<String>(""); 
	const [lastName, setLastName] = useState<String>(""); 
	const [street,setStreet] = useState<String>(""); 
	const [city, setCity] = useState<String>(""); 
	const [state, setState] = useState<String>("");
	const [departement, setDepartement] = useState<String>(""); 
	const [zipCode, setZipCode] = useState<Number>(0); 

	
	
	const handleSubmit = (e: any) => {
		e.preventDefault(); 
		
		console.log(e);
	}
	

	return (
	<form onSubmit={handleSubmit}>
			<div className="container-two">
				<label htmlFor="first-name">First Name</label>
				<label htmlFor="last-name">Last Name</label>
			</div>
			<div className="container-two">
			
				<input type="text" id="first-name" onChange={(firstName) => setFirstName(firstName.target.value)} />
				<input type="text" id="last-name" onChange={(lastName) => setStreet(lastName.target.value)} />
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
				<input id="street" type="text" onChange={(street) => setStreet(street.target.value)} />

			<label htmlFor="city">City</label>
				<input id="city" type="text" onChange={(city) => setCity(city.target.value)} />

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
				<input id="zip-code" type="number" onChange={(zipCode) => setZipCode(parseInt(zipCode.target.value))} />
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
	);
}