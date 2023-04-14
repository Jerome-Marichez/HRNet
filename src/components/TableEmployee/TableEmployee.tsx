
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";

export interface TableEmployeeProps {
	rowsData: Array<Array<string>>
	columnsData: Array<string>
}
export default function TableEmployee({ rowsData, columnsData }: TableEmployeeProps): JSX.Element {

	return (
		<Grid
			data={rowsData}
			columns={columnsData}
			search={true}
			pagination={{
				limit: 20,
			}}
		/>
	);
}