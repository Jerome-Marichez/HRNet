import "../globalStyle.scss";
import { Link } from "react-router-dom";
import { employeePath } from "../utils/routesPath";
import FormEmployee from "../components/FormEmployee/FormEmployee";
import { departementsData } from "../data/departements";
import { statesData } from "../data/states";

export default function Home(): JSX.Element {
	
	const states = statesData.map((value: any) => { return value['name']}); 

	return (
	<>
	<div className="title">
		<h1>HRnet</h1>
		
	</div>
		<div className="container">

			<Link to={employeePath}>View Current Employees</Link>
			<FormEmployee states={states} departements={departementsData}/>
		</div>
		</>
);
}