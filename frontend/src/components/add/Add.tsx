import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useState } from "react";
import AxiosInstance from "../axios";

type Props = {
    currentPage: string;
    apiroute: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props: Props) => {
    const [user, setUser] = useState([])

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
		try {
			const response = await AxiosInstance.post(`${props.apiroute}`, user);
			console.log(response)
            setUser(response.data)
			props.setOpen(false)
            window.location.reload()

		} catch (error) {
			console.log(error);
			
		}
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setUser((data: any) => ({
            ...data,
            [name]: value
        }));
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
                            <input type={column.type} placeholder={column.field} 
                            onChange={handleInputChange}/>
                        </div>
                    ))}
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Add;