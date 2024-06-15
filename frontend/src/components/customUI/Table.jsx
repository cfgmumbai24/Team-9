import { Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const CustomTable = ({ columns, data, base = "courses" }) => {
  const navigate = useNavigate();

  return (
    <Table>
      <Table.Head>
        {columns.map((column, index) => (
          <Table.HeadCell key={index}>{column.header}</Table.HeadCell>
        ))}
      </Table.Head>
      <Table.Body className="cursor-pointer">
        {data.map((row, rowIndex) => (
          <Table.Row key={rowIndex}>
            {columns.map((column, colIndex) => (
              <Table.Cell
                key={colIndex}
                onClick={() => {
                  console.log("Table Cell Clicked");
                  navigate(`/${base}/${row._id}`);
                }}
              >
                {row[column.accessor]}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default CustomTable;
