import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
    currentPage: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props: Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        // Add new item
        // axios.post(`/api/${slug}s`) //adding s because of the component name and it is not mandatory
    };

    return (
        <div className="addDiv">
            <div className="modal">
                <span className="close" onClick={() => props.setOpen(false)}> X </span>
                <h1>Add New {props.currentPage}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns.filter((item) => item.field !== "id" && item.field !== "img")
                    .map((column) => (
                        <div className="item" key={column.field}>
                            <label>{column.headerName}</label>
                            <input type={column.type} placeholder={column.field} />
                        </div>
                    ))}
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Add;