import "./payslip.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef, GridEditInputCell } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Add from "../../components/add/Add";
import AxiosInstance from "../../components/axios";

const PaySlip = () =>{
    const[open, setOpen] = useState(false)
    const[payslipRows, setPayslipRows] = useState([])
    const [empdata,SetEmpData] = useState([])

    const columns:GridColDef[]=[
        {field:"id",headerName:"ID",width:90},
        {field:'employee_id', headerName:'Employee ID',width: 150, editable: true, 
            type: 'singleSelect',
              valueOptions: empdata.map((options:any) => ({ label: options.empDetails, value: options.employee_id })),
          },
        { field:"uploaded_month", headerName:"Uploaded Month", width: 150, editable: false, type:"number",
            renderEditCell: (params) => (
                <GridEditInputCell
                  {...params}
                  inputProps={{
                    maxLength: 10,
                    minLength: 25,
                  }}
                />
              ),
        },
        { field:"uploaded_year", headerName:"Uploaded Year", width: 150, editable: false, type: "number" },
        { field:"file", headerName:"File", width: 200, editable: false, type:"file" },
    ]
    
    const columnsView:GridColDef[]=[
        {field:"id",headerName:"ID",width:90},
        {field:'employee_id', headerName:'Employee ID',width: 150, editable: true, 
            type: 'singleSelect',
              valueOptions: empdata.map((options:any) => ({ label: options.employee_id, value: options.employee_id })),
          },
        { field:"uploaded_month", headerName:"Uploaded Month", width: 150, editable: false, type:"number", align:'center',
            renderEditCell: (params) => (
                <GridEditInputCell
                  {...params}
                  inputProps={{
                    maxLength: 10,
                    minLength: 25,
                  }}
                />
              ),
        },
        { field:"uploaded_year", headerName:"Uploaded Year", width: 150, editable: false, type: "string", align:'center'},
    ]

    useEffect(() =>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        try {
            const empresponse = await AxiosInstance.get("employee/custom-emp/view/")
            SetEmpData(empresponse.data)
            const response =await AxiosInstance.get("/payslip/payslip/view")
            setPayslipRows(response.data)
        } catch (error) {
            console.log("error");
            
        }

    }
    return(
        <div className="payslipclass">
            <div className="info">
                <h1>Payslip</h1>
                <button onClick={() => setOpen(true)}>Add Payslip</button>
            </div>
            <DataTable columns={columnsView} currentPage ="payslip" rows={payslipRows} apiroute="/payslip/payslip/view" actions="payslip/payslip/del"/>
            {open && (<Add  columns={columns}currentPage="payslip" apiroute="/payslip/payslip/view" setOpen={setOpen} />)}
        </div>
    )
}
export default PaySlip