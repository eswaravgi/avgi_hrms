import { Link } from "react-router-dom";
import "./dataTable.scss"
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
// import { useState ,useEffect} from "react";
// import AxiosInstance from "../axios";

type Props = {
    columns: GridColDef[];
    rows: object[];
    currentPage: string;
    actions :string
    apiroute : string
}
const dataTable = (props: Props) => {
    // const [rows, setRows] = useState([]);
    

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await AxiosInstance.get(`${props.apiroute}`);
    //         setRows(response.data); 
    //         console.log("succesfully")   
    //     } catch (error) {
    //         console.log(error);  
        
    //     } 
    // };
    const handleDelete = (id:number) => {
            // Delete actions
            // axios.delete('/api/${currentPage}/id')
            console.log(id + " Deleted");
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
            // disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            />
        </div>
    )
}

export default dataTable