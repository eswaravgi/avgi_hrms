import "./policy.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef} from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Add from "../../components/add/Add";
import AxiosInstance from "../../components/axios";

const columns:GridColDef[]=[
    {field:"id",headerName:"ID",width:90},
    { field:"policy_name", headerName:"Policy Name", width: 200, editable: false, type:"string",},
    { field:"file", headerName:"File", width: 200, editable: false, type:"file" },
]

const columnsView: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field:"policy_name", headerName:"Policy Name", width: 200, editable: false, type:"string" },
    {
      field: "dowmloadfile",
      headerName: "Download File",
      width: 150,
      editable: false,
    },
  ];

const Policy = () =>{
    const[open, setOpen] = useState(false)
    const[policyRows, setPolicyRows] = useState([])

    useEffect(() =>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        try {
            const response =await AxiosInstance.get("/report/policy-report/view")
            setPolicyRows(response.data)
        } catch (error) {
            console.log("error");   
        }
    }
    return(
        <div className="policyclass">
            <div className="info">
                <h1>Policy</h1>
                <button onClick={() => setOpen(true)}>Add Policy</button>
            </div>
            <DataTable columns={columnsView} currentPage ="policy" rows={policyRows} apiroute="/report/policy-report/view" actions="/report/policy-report/del"/>
            {open && (<Add  columns={columns}currentPage="policy" apiroute="/report/policy-report/view" setOpen={setOpen} />)}
        </div>
    )
}
export default Policy