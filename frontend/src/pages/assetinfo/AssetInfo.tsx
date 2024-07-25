import "./assetInfo.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Add from "../../components/add/Add";
import AxiosInstance from "../../components/axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "asset_id",
    headerName: "Asset Id",
    width: 200,
    editable: true,
    type: "string",
  },
  {
    field: "employee_id",
    headerName: "Employee Id",
    width: 200,
    editable: true,
    type: "string",
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
      { value: "provided", label: "Provided" },
      { value: "returned", label: "Returned" },
    ],
  },
];

const AssetInfo = () => {
  const [open, setOpen] = useState(false);
  const [assetinforows, SetAssetInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
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
        columns={columns}
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
