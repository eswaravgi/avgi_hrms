import "./departments.scss";
import DataTable from "../../components/dataTable/dataTable";
import { GridColDef } from "@mui/x-data-grid";
// import { departmentRows } from "../../data";
import { useState, useEffect } from "react";
import Add from "../../components/add/Add";
import AxiosInstance from "../../components/axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, type: "string" },
  {
    field: "department",
    headerName: "Department Name",
    width: 900,
    editable: true,
    type: "string",
  },
];

const Departments = () => {
  const [open, setOpen] = useState(false);
  const [departmentRows, SetDepartmentRows] = useState([]);

  useEffect(() => {
    fetchData();
    }, []);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/employee/dept/view");
      SetDepartmentRows(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="departmentClass">
      <div className="info">
        <h1>Departments</h1>
        <button onClick={() => setOpen(true)}>Add Department</button>
      </div>
      <DataTable
        columns={columns}
        rows={departmentRows}
        currentPage="departments"
        apiroute="/employee/dept/view"
        actions="employee/dept/del"
      />
      {open && (
        <Add
          currentPage="departments"
          apiroute="/employee/dept/view"
          columns={columns}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default Departments;
