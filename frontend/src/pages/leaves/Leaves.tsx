import "./leaves.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { leaveRows } from "../../data";
import { useEffect, useState } from "react";
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
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      type: 'string',
    },
    {field:'emp_id', headerName:'Employee ID',width: 150, editable: true, type: 'string'},
    { field: 'leave_type', headerName: 'Leave Type', width: 150, editable: true, type: 'string' },
    { field: 'start_date', headerName: 'From', width: 150, editable: true, type: 'date' },
    { field: 'end_date', headerName: 'To', width: 150, editable: true, type: 'date' },
    // { field: 'reason', headerName: 'Reasons', width: 150, editable: true, type: 'string' },
    { field: 'status', headerName: 'Status', width: 100, type: 'string' },
];

const Leaves = () => {
  const [open, setOpen] = useState(false);
  const[leaveRows, setLeaveRows] = useState([])

  useEffect(() => {
    fetchData();
  },[])

  
  const fetchData = async() =>{
        try {
            const response = await AxiosInstance.get("/attendance/leave_req/view")
            setLeaveRows(response.data)
            console.log("Data fetching Successfully");
            
        } catch (error) {
            console.log("Data Fetching Error");
            
            
        }
  }

    return (
        <div className="leaveClass">
            <div className="info">
                <h1>Leaves</h1>
                <button onClick={() => setOpen(true)}>Add Leave</button>
            </div>
            <DataTable columns={columns} rows={leaveRows} apiroute="/attendance/leave_req/view" actions = "/attendance/leave_req/del"currentPage="leaves"/>
            {open && <Add currentPage="leaves" columns={columns} apiroute="/attendance/leave_req/view" setOpen={setOpen}/>}
        </div>
    )
}

export default Leaves;