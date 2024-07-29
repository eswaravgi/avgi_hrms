import "./attendance.scss"
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef,  } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Add from "../../components/add/Add";
import AxiosInstance from "../../components/axios";



const Attendance = () =>{
    const[open, setOpen] = useState(false)
    const[attendancrRows, setAttendanceRows] = useState([])
    const [empdata,SetEmpData] = useState([])

    const columns:GridColDef[]=[
        {field:"id",headerName:"ID",width:90},
        {field:"employee_id",headerName:"Employee Id", width:200,editable:true,
            type: "singleSelect",
            valueOptions: empdata.map((options:any) => ({ label: options.empDetails, value: options.employee_id })),
        },
        {field:"attendance_date", headerName:"Date", width:200, editable:true, type:"Date"},
        {field:"clock_in_time", headerName:"Login", width:200, editable:true, type:"datetime-local"},
        {field:"clock_out_time", headerName:"Logout", width:200, editable:true, type:"datetime-local"}, 
    ]

    const columnsview:GridColDef[]=[
        {field:"id",headerName:"ID",width:90},
        {field:"employee_id",headerName:"Employee Id", width:200,editable:true,
            type: "singleSelect",
            valueOptions: empdata.map((options:any) => ({ label: options.employee_id , value: options.employee_id })),
        },
        {field:"attendance_date", headerName:"Date", width:200, editable:true, type:"Date"},
        {field:"clock_in_time", headerName:"Login", width:200, editable:true, type:"datetime-local"},
        {field:"clock_out_time", headerName:"Logout", width:200, editable:true, type:"datetime-local"}, 
    ]
    
    

    useEffect(() =>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        try {
            const empresponse = await AxiosInstance.get("employee/custom-emp/view/")
            SetEmpData(empresponse.data)
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
            <DataTable columns={columnsview} currentPage ="attendace" rows={attendancrRows} apiroute="/attendance/attendance/view" actions="attendance/attendance/del"/>
            {open && (<Add  columns={columns}currentPage="attendance" apiroute="/attendance/attendance/view" setOpen={setOpen} />)}
        </div>
    )
}
export default Attendance