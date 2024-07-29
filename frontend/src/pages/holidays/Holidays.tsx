import "./holdays.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Add from "../../components/add/Add";
import AxiosInstance from "../../components/axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, type: "string" },
  { field: "holiday_date", headerName: "Date", width: 400,editable: true,type: "Date"},
  { field: "holiday", headerName: "Holiday", width: 400,editable: true,type: "string"},
];

const Holidays = () => {
  const [open, setOpen] = useState(false);
  const [holidayRows, SetHolidayRows] = useState([]);

  useEffect(() => {
    fetchData();
    }, []);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("attendance/holiday/view");
      SetHolidayRows(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="holdayClass">
      <div className="info">
        <h1>Holidays</h1>
        <button onClick={() => setOpen(true)}>Add Holiday</button>
      </div>
      <DataTable columns={columns} rows={holidayRows}currentPage="holidays" apiroute="attendance/holiday/view"actions="attendance/holiday/del"/>
      {open && (<Add currentPage="holidays" apiroute="attendance/holiday/view" columns={columns} setOpen={setOpen}/>)}
    </div>
  );
};

export default Holidays;