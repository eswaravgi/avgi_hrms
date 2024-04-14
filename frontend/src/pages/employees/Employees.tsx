import "./employees.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, type: 'string', },
    {
        field: 'img',
        headerName: 'Avatar',
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
      type: 'string',
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
      type: 'string',
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
      type: 'string',
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      type: 'string',
    },
    {field: 'phone', headerName: 'Phone', width: 100, type: 'number'},
    { field: 'status', headerName: 'Status', width: 100, type: 'boolean' },
];

const Employees = () => {
  const [open, setOpen] = useState(false);
    return (
        <div className="userClass">
            <div className="info">
                <h1>Employees</h1>
                <button onClick={() => setOpen(true)}>Add New Employee</button>
            </div>
            <DataTable columns={columns} rows={userRows} currentPage="employees"/>
            {open && <Add currentPage="employees" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}

export default Employees;