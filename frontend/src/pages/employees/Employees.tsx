import "./employees.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState,useEffect } from "react";
import Add from "../../components/add/Add";
import AxiosInstance from "../../components/axios";

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
        `${params.row.first_name || ''} ${params.row.lastName || ''}`,
      type: 'string',
    },
    { field: 'first_name', headerName: 'First Name', width: 150, editable: false, type: 'string',},
    { field: 'last_name', headerName: 'Last Name', width: 150, editable: false, type: 'string' },
    { field: 'date_of_birth', headerName: 'Date of Birth', width: 100, editable: false, type: 'Date' },
    { field: 'gender', headerName: 'Gender', width: 100, editable: false, type: 'string'},
    { field: 'department', headerName: 'Department', width: 150, editable: false, type: 'string'},
    { field: 'designation', headerName: 'Designation', width: 150, editable: false, type: 'string' },
    { field: 'reporting_to', headerName: 'Reporting To', width: 150, editable: false, type: 'string' },
    { field: 'personal_mail', headerName: 'Personal Mail', width: 200, editable: false, type: 'string' },
    { field: 'company_mail', headerName: 'Company Mail', width: 200, editable: false, type: 'string' },
    { field: 'emp_id', headerName: 'Employee ID', width: 100, editable: false, type: 'string' },
    { field: 'address', headerName: 'Address', width: 200, editable: false, type: 'string' },
    { field: 'contact_number', headerName: 'Contact Number', width: 150, editable: false, type: 'string' },
    { field: 'status', headerName: 'Status', width: 100, type: 'string' },
];

const Employees = () => {
  const [open, setOpen] = useState(false);
  const [emprows, setEmployeeRows] = useState([]);


  useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await AxiosInstance.get("/employee/emp/view");
            setEmployeeRows(response.data);
            console.log("Successfully fetched data");
        } catch (error) {
            console.error("Error fetching data:", error);
            
        }
    };
    
    return (
        <div className="userClass">
            <div className="info">
                <h1>Employees</h1>
                <button onClick={() => setOpen(true)}>Add New Employee</button>
            </div>
            <DataTable columns={columns} currentPage = "employees" rows={emprows} apiroute="/employee/emp/view" actions="employee/emp/del"/>
            {open && <Add currentPage = "employees" apiroute="/employee/emp/view" columns={columns} setOpen={setOpen}/>} 
        </div>
    )
}

export default Employees;