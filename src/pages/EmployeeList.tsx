
import TableEmployee from "../components/TableEmployee/TableEmployee";
import { useState, useEffect } from "react";
import { readDB } from "../data/database";
import "../globalStyle.scss";
import { Link } from "react-router-dom";
import { homePath } from "../utils/routesPath";

export default function EmployeeList(): JSX.Element {

	const [isLoading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [rowsData, setRowsData] = useState<string[]>([]);
	const [columnsData, setColumnsData] = useState<string[]>([]);

	const loadData = async () => {
		const data: any = await readDB();

		if (data) {
			const columnsData: Array<string> = Object.getOwnPropertyNames(data[0]);
			const rowsData: Array<string> = data.map((object: any) => Object.values(object));
			setColumnsData(columnsData);
			setRowsData(rowsData);
		}
		else {
			setError(true);
		}

		setLoading(false);
	}


	useEffect(() => {
		loadData();
	}, [])



	return (
		<div id="employee-div" className="container">
			<h1>Current Employees</h1>
			{!isLoading && !error ?
				(<TableEmployee
					rowsValues={rowsData}
					columnsValues={columnsData}
				/>) :
				(<h2>{error ? "Error cannot access data" : "Loading..."}</h2>)
			}
			<Link to={homePath}>Home</Link>
		</div>
	);
}

