
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import "./TableEmployee.scss";
import { Link } from "react-router-dom";
import { homePath } from "../../utils/routesPath";
import { ChangeEvent, useState } from 'react';
import setZoomPage from '../../utils/zoomPage';

export interface TableEmployeeProps {
	rowsValues: Array<Array<string>>
	columnsValues: Array<string>
}

/**
 * 
 * @param rowsValues A array of string who contains all values of row
 * @param columnsValues A array of array<string> who contains all columns value
 * @returns A Table Component
 */
export default function TableEmployee({ rowsValues, columnsValues }: TableEmployeeProps): JSX.Element {

	const paginationArray: Array<number> = [5, 10, 25, 50];
	const zoomArray: Array<number> = [100, 90, 80, 70];
	const [paginationLimit, setPaginationLimit] = useState<number>(paginationArray[0]);
	const [zoom, setZoom] = useState<number>(paginationArray[0]);

	const handlePaginationLimit = (e: ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();
		setPaginationLimit(Number(e.currentTarget.value));
	}

	const handleZoom = (e: ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();
		const zoomValue = Number(e.currentTarget.value);
		setZoomPage(zoomValue);
		setZoom(zoomValue);
	}

	return (
		<div className="grid-container">
			<Grid
				data={rowsValues}
				columns={columnsValues}
				search={true}
				resizable={true}
				pagination={{
					enabled: true,
					summary: true,
					limit: paginationLimit,
				}}
				sort={true}
			/>
			<div className="grid-footer">
				<div className="area-flex">⚙️ Show
					<select value={paginationLimit} onChange={handlePaginationLimit}>
						{paginationArray.map((value, index) => <option key={index} value={value}>{value}</option>)}
					</select>entries
				</div>
				<div className="area-flex"><Link to={homePath}>🏠 Home</Link></div>
				<div className="area-flex">🔍 Zoom
					<select value={zoom} onChange={handleZoom}>
						{zoomArray.map((value, index) => <option key={index} value={value}>{value}%</option>)}
					</select>
				</div>
			</div>
		</div>
	);
}