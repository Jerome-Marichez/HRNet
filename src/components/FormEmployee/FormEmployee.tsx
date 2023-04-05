import "./FormEmployee.scss"; 
import Dropdown from 'react-dropdown';

interface selectValue {
	states: Array<string>; 
	departements: Array<string>; 
}

export default function FormEmployee({ states, departements } : selectValue) : JSX.Element { 
	
	const handleSubmit = (e: any) => {
		e.preventDefault(); 
		
		console.log(e);
	}
	

	return (
	<form onSubmit={handleSubmit}>
		<label htmlFor="first-name">First Name</label>
		<input type="text" id="first-name" />

		<label htmlFor="last-name">Last Name</label>
		<input type="text" id="last-name" />

		<label htmlFor="date-of-birth">Date of Birth</label>
		<input id="date-of-birth" type="text" />

		<label htmlFor="start-date">Start Date</label>
		<input id="start-date" type="text" />

		<fieldset className="address">
			<legend>Address</legend>

			<label htmlFor="street">Street</label>
			<input id="street" type="text" />

			<label htmlFor="city">City</label>
			<input id="city" type="text" />

			<label htmlFor="state">State</label>
			<Dropdown
					className="dropdown"
					controlClassName="dropdown-control"
					options={states}
					placeholder={states[0]}
					arrowClosed={<div>⮟</div>}
					arrowOpen={<div>⮝</div>}
			/>

			<label htmlFor="zip-code">Zip Code</label>
			<input id="zip-code" type="number" />
		</fieldset>

		<label htmlFor="department">Department</label>
			<Dropdown 
			className="dropdown" 
			controlClassName="dropdown-control"
			options={departements} 
			placeholder={departements[0]}
			arrowClosed={<div>⮟</div>}
			arrowOpen={<div>⮝</div>}
			/>

			
		<button>Save</button>
	</form>
	);
}