import "../globalStyle.scss";
import { Link } from "react-router-dom";
import { employeePath } from "../utils/routesPath";
import FormEmployee from "../components/FormEmployee/FormEmployee";
import { statesData,departementsData } from "../data/staticData";
import setZoomPage from "../utils/zoomPage";

export default function Home(): JSX.Element {

	setZoomPage(100);
	const states = statesData.map((value: any) => { return value['name'] });

	return (
		<>
			<div className="title">
				<h1>HRnet</h1>
			</div>

			<div className="container">
				<Link to={employeePath}>View Current Employees</Link>
				<h2>Create Employee</h2>
				<FormEmployee states={states} departements={departementsData} />
			</div>
		</>
	);
}