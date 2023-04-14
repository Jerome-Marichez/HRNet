
import TableEmployee from "../components/TableEmployee/TableEmployee";

export default function EmployeeList(): JSX.Element {
	return (
		<TableEmployee rowsData={[
			['John', 'john@example.com'],
			['Mike', 'mike@gmail.com']
		]}
			columnsData={['Name', 'Email']} />
	);
}

