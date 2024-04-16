import "./leaves.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { leaveRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, type: 'string' },
    {
        field: 'img',
        headerName: 'Avatar',
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
      field: 'fullName',
      headerName: 'Name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      type: 'string',
    },
    { field: 'leaveType', headerName: 'Leave Type', width: 150, editable: true, type: 'string' },
    { field: 'fromDate', headerName: 'From', width: 150, editable: true, type: 'string' },
    { field: 'toDate', headerName: 'To', width: 150, editable: true, type: 'string' },
    { field: 'reason', headerName: 'Reasons', width: 150, editable: true, type: 'string' },
    { field: 'status', headerName: 'Status', width: 100, type: 'boolean' },
];

const Leaves = () => {
  const [open, setOpen] = useState(false);
    return (
        <div className="leaveClass">
            <div className="info">
                <h1>Leaves</h1>
                <button onClick={() => setOpen(true)}>Add Leave</button>
            </div>
            <DataTable columns={columns} rows={leaveRows} currentPage="leaves"/>
            {open && <Add currentPage="leaves" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}

export default Leaves;