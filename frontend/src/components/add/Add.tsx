
import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useState } from "react";
import AxiosInstance from "../axios";

type Props = {
  currentPage: string;
  apiroute: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const [user, setUser] = useState<any>({});
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();

    // Append user data
    for (const [key, value] of Object.entries(user)) {
      formData.append(key, value as string); // Type cast value to string
    }

    // Append file if present
    if (file) {
      formData.append("file", file as Blob); // Type cast file to Blob
    }

    try {
      const response = await AxiosInstance.post(`${props.apiroute}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUser(response.data);
      props.setOpen(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.currentTarget;
    setUser((data: any) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFile(file);
    }
  };

  return (
    <div className="addDiv">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          x
        </span>
        <h1>Add New {props.currentPage}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                {column.type === "singleSelect" ? (
                  <select name={column.field} onChange={handleInputChange}>
                    {column.valueOptions.map((optionValue: any) => (
                      <option key={optionValue.value} value={optionValue.value}>
                        {optionValue.label}
                      </option>
                    ))}
                  </select>
                ) : column.type === "file" ? (
                  <input
                    name={column.field}
                    type="file"
                    onChange={handleFileChange}
                  />
                ) : (
                  <input
                    name={column.field}
                    type={column.type}
                    placeholder={column.field}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            ))}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
