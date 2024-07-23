import "./departments.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Add from "../../components/add/Add";
import AxiosInstance from '../../components/axios';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, type: 'string' },
    { field: 'department', headerName: 'Department Name', width: 900, editable: true, type: 'string' },
];

const Departments = () => {
  const [open, setOpen] = useState(false);
  const [dtData, setItems] = useState([]);
  
    const departmentData = () => AxiosInstance.get(`employee/dept/view`).then((response) => {
        setItems(response.data);
    }).catch((error) => console.log(error));

    useEffect(() => {
        departmentData();
    }, []);

    return (
        <div className="departmentClass">
            <div className="info">
                <h1>Departments</h1>
                <button onClick={() => setOpen(true)}>Add Department</button>
            </div>
            <DataTable columns={columns} rows={dtData} currentPage="departments"/>
            {open && <Add currentPage="departments" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}

export default Departments;