import { Table } from 'flowbite-react';

const CustomTable = ({ columns, data }) => {
	return (
		<Table>
			<Table.Head>
				{columns.map((column, index) => (
					<Table.HeadCell key={index}>{column.header}</Table.HeadCell>
				))}
			</Table.Head>
			<Table.Body>
				{data.map((row, rowIndex) => (
					<Table.Row key={rowIndex}>
						{columns.map((column, colIndex) => (
							<Table.Cell key={colIndex}>{row[column.accessor]}</Table.Cell>
						))}
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	);
};

export default CustomTable;
