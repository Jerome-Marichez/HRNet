
import TableEmployee from "../components/TableEmployee/TableEmployee";
import { useState, useEffect } from "react";
import { readDB } from "../data/database";
import "../globalStyle.scss";

export default function EmployeeList(): JSX.Element {

	const [isLoading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [rowsData, setRowsData] = useState<Array<Array<string>>>([]);
	const [columnsData, setColumnsData] = useState<Array<string>>([]);


	const loadData = async () => {
		const data: any = await readDB();
		if (data[0]) {
			const columnsData: Array<string> = Object.getOwnPropertyNames(data[0]);
			const rowsData: Array<Array<string>> = data.map((object: any) => Object.values(object));
			setColumnsData(columnsData);
			setRowsData(rowsData);
		}
		else {
			setError(true);
		}
		setTimeout(() => setLoading(false), 250);
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
				(<h2>{error ? "Error cannot access data 😭" : "Loading 🖳"}</h2>)
			}
		</div>
	);
}

