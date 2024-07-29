import "./assets.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Add from "../../components/add/Add";
import AxiosInstance from "../../components/axios";

const columns:GridColDef[]=[
    {field:"id",headerName:"id", width:90, type:"string"},
    {field:"asset_name",headerName:"Asset Name", width:200, editable:true,type:"string"},
    {field:"asset_model",headerName:"Asset Model", width:200, editable:true,type:"string"},
    {field:"asset_purchase_price",headerName:"Purchase Price", width:200, editable:true,type:"string"},
    {field:"asset_purchase_date",headerName:"Purchase Date", width:200, editable:true,type:'Date'},
    {field:"notes",headerName:"Notes",width:200, editable:true,type:"string"},
]

const Assets= () => {
    const [open, setOpen] = useState(false);
    const [AssetRows,SetAssetRows] = useState([])
    useEffect(() =>{
        fetchData()
    },[])

    const fetchData = async () =>{
        try {
            const response = await AxiosInstance.get("/asset/asset_info/view")
            SetAssetRows(response.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

  return (
    <div className="assetclass">
        <div className="info">
            <h1>Assets</h1>
            <button onClick={() => setOpen(true)}>Add Assets</button>
        </div>
        <DataTable columns={columns} currentPage ="assets" rows={AssetRows} apiroute="/asset/asset_info/view" actions="asset/asset_info/del"/>
        {open &&(<Add currentPage='assets'apiroute='/asset/asset_info/view'columns={columns} setOpen={setOpen}/>)}
    </div>
  )
}

export default Assets