import "./departments.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef } from "@mui/x-data-grid";
import { departmentRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, type: 'string' },
    { field: 'departmentName', headerName: 'Department Name', width: 900, editable: true, type: 'string' },
];

const Departments = () => {
  const [open, setOpen] = useState(false);
    return (
        <div className="departmentClass">
            <div className="info">
                <h1>Departments</h1>
                <button onClick={() => setOpen(true)}>Add Department</button>
            </div>
            <DataTable columns={columns} rows={departmentRows} currentPage="departments"/>
            {open && <Add currentPage="departments" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}

export default Departments;