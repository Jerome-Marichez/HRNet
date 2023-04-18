
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import "./TableEmployee.scss";

export interface TableEmployeeProps {
	rowsValues: Array<string>
	columnsValues: Array<string>
}

export default function TableEmployee({ rowsValues, columnsValues }: TableEmployeeProps): JSX.Element {



	return (

		<Grid
			data={rowsValues}
			columns={columnsValues}
			search={true}
			resizable={true}
			pagination={{
				enabled: true,
				summary: true,
				limit: 100,
			}}
			sort={true}
		/>

	);
}