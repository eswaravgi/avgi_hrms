import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss"

const data = [
    { name: "Completed", value: 300, color: "#0088FE" },
    { name: "InProgess", value: 240, color: "#00C49F" },
    { name: "OnHold", value: 70, color: "#FFBB28" },
    { name: "Pending", value: 100, color: "#FF8042" },
];

const PieChartBox = () => {
    return (
        <div className="pieChartBox">
            <h1>Task Statistics</h1>
            <div className="pieChart">
                <ResponsiveContainer width="99%" height="100%">
                    <PieChart>
                        <Tooltip 
                            contentStyle={{background: "white", borderRadius: "5px"}}
                        />
                        <Pie data={data} innerRadius={"70%"} outerRadius={"90%"} paddingAngle={5} dataKey="value">
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {data.map((item) => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{backgroundColor: item.color}} />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChartBox;