import "./leaves.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef } from "@mui/x-data-grid";
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
    {field:'employee_id', headerName:'Employee ID',width: 150, editable: true, type: 'string'},
    { field: 'leave_type', headerName: 'Leave Type', width: 150, editable: true, 
        type: "singleSelect",
        valueOptions: [
          { value: "sick leave", label: "Sick Leave" },
          { value: "casual leave", label: "Casual Leave" },
          { value: "medical leave", label: "Medical Leave" },
        ],
    },
    { field: 'start_date', headerName: 'From', width: 150, editable: true, type: 'Date' },
    { field: 'end_date', headerName: 'To', width: 150, editable: true, type: 'Date' },
    { field: 'status', headerName: 'Status', width: 100, editable: false,  
        type: "singleSelect",
        valueOptions: [
          { value: "pending", label: "Pending" },
          { value: "approved", label: "Approved" },
          { value: "rejected", label: "Rejected" },
        ],
     },
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