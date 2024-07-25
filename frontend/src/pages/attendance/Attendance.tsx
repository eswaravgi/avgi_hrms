import "./attendance.scss"
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef,  } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Add from "../../components/add/Add";
import AxiosInstance from "../../components/axios";

const columns:GridColDef[]=[
    {field:"id",headerName:"ID",width:90},
    {field:"employee_id",headerName:"Employee Id", width:200,editable:true,type:"string"},
    {field:"attendance_date", headerName:"Date", width:200, editable:true, type:"Date"},
    {field:"clock_in_time", headerName:"Login", width:200, editable:true, type:"datetime-local"},
    {field:"clock_out_time", headerName:"Logout", width:200, editable:true, type:"datetime-local"}, 
]

const Attendance = () =>{
    const[open, setOpen] = useState(false)
    const[attendancrRows, setAttendanceRows] = useState([])

    useEffect(() =>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        try {
            const response =await AxiosInstance.get("/attendance/attendance/view")
            setAttendanceRows(response.data)
        } catch (error) {
            console.log("error");     
        }
    }
    return(
        <div className="attendaceclass">
            <div className="info">
                <h1>Attendance</h1>
                <button onClick={() => setOpen(true)}>Add Attendance</button>
            </div>
            <DataTable columns={columns} currentPage ="attendace" rows={attendancrRows} apiroute="/attendance/attendance/view" actions=""/>
            {open && (<Add  columns={columns}currentPage="attendance" apiroute="/attendance/attendance/view" setOpen={setOpen} />)}
        </div>
    )
}
export default Attendance