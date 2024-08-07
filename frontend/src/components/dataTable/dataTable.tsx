import { Link } from "react-router-dom";
import "./dataTable.scss"
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import AxiosInstance from "../axios";

type Props = {
    columns: GridColDef[];
    rows: object[];
    currentPage: string;
    actions :string
    apiroute : string
}
const dataTable = (props: Props) => {
    const handleDelete =async (id:number) => {
    try {
        await AxiosInstance.delete(`${props.actions}/${id}/`)
        console.log(`${id} Deleted`);
        window.location.reload()
    } catch (error) {
        console.log("Error", error);
    }
 
    }

    const actionColumn: GridColDef = {
        field: "actions",
        headerName: "Actions",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${props.currentPage}/${params.row.id}`}>
                    <img src="view.svg" alt="" />
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="delete.svg" alt="" />
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="dataTable">
            <DataGrid className="dataGridItems"
            rows={props.rows}
            columns={[...props.columns, actionColumn]}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                },
            }}
            slots={{toolbar:GridToolbar}}
            slotProps={{
                toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: {debounceMs: 500},
                }
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnSelector
            disableDensitySelector
            />
        </div>
    )
}

export default dataTable