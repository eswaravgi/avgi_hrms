import "./assetInfo.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Add from "../../components/add/Add";
import AxiosInstance from "../../components/axios";

const AssetInfo = () => {

  const [open, setOpen] = useState(false);
  const [assetinforows, SetAssetInfo] = useState([]);
  const [empdata,setEmpData] = useState([])
  const [assetData, setAssetData] =useState([])

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "asset_id",
      headerName: "Asset Id",
      width: 200,
      editable: true,
      type: "singleSelect",
      valueOptions: assetData.map((options: any) => ({
        label: `${options.asset_name} ${options.asset_model}`,
        value: options.id,
      })),
    },
    {
      field: "employee_id",
      headerName: "Employee Id",
      width: 200,
      editable: true,
      type: "singleSelect",
        valueOptions: empdata.map((options:any) => ({ label: options.empDetails, value: options.employee_id })),
    },
    {
      field: "provided_date",
      headerName: "Provided Date",
      width: 200,
      editable: true,
      type: "Date",
    },
    {
      field: "returned_date",
      headerName: "Returned Date",
      width: 200,
      editable: true,
      type: "Date",
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      editable: false,
      type: "singleSelect",
      valueOptions: [
        { value: "in-use", label: "In-Use" },
        { value: "pending", label: "Pending" },
        { value: "returned", label: "Returned" },
      ],
    },
  ];

  const columnsview: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "asset_id",
      headerName: "Asset Id",
      width: 200,
      editable: true,
      type: "singleSelect",
      valueOptions: assetData.map((options: any) => ({
        label: `${options.asset_name} ${options.asset_model}`,
        value: options.id,
      })),
    },
    {
      field: "employee_id",
      headerName: "Employee Id",
      width: 200,
      editable: true,
      type: "singleSelect",
        valueOptions: empdata.map((options:any) => ({ label: options.employee_id , value: options.employee_id })),
    },
    {
      field: "provided_date",
      headerName: "Provided Date",
      width: 200,
      editable: true,
      type: "Date",
    },
    {
      field: "returned_date",
      headerName: "Returned Date",
      width: 200,
      editable: true,
      type: "Date",
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      editable: false,
      type: "singleSelect",
      valueOptions: [
        { value: "in-use", label: "In-Use" },
        { value: "pending", label: "Pending" },
        { value: "returned", label: "Returned" },
      ],
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const assetresponse = await AxiosInstance.get("/asset/asset_info/view")
      setAssetData(assetresponse.data)
      const empresponse = await AxiosInstance.get("employee/custom-emp/view/")
      setEmpData(empresponse.data)
      console.log("emplyee_id Retrived");
      const response = await AxiosInstance.get("/asset/asset/view");
      SetAssetInfo(response.data);
      console.log("Fetched Success");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="assetinfoclass">
      <div className="info">
        <h1>Asset Info</h1>
        <button onClick={() => setOpen(true)}>Add Assets</button>
      </div>
      <DataTable
        columns={columnsview}
        rows={assetinforows}
        currentPage="assetsinfo"
        actions="/asset/asset/del"
        apiroute="/asset/asset/view"
      />
      {open && (
        <Add
          columns={columns}
          currentPage="assetsinfo"
          apiroute="/asset/asset/view"
          setOpen={setOpen}
        />
      )}
    </div>
  );
};
export default AssetInfo;
