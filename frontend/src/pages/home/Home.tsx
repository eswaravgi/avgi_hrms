import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import { barChartBoxRevenue, barChartBoxSales, chartBoxConversion, chartBoxRevenue, chartBoxSales, chartBoxUser } from "../../data";
import "./home.scss"

const Home = () => {
    return (
        <div className="homeClass">
            <div className="box box1"><TopBox /></div>
            <div className="box box2"><ChartBox {...chartBoxUser} /></div>
            <div className="box box3"><ChartBox {...chartBoxRevenue}/></div>
            <div className="box box4"><PieChartBox/></div>
            <div className="box box5"><ChartBox {...chartBoxSales}/></div>
            <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
            <div className="box box7"><BigChartBox/></div>
            <div className="box box8"><BarChartBox {...barChartBoxSales}/></div>
            <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
        </div>
    )
}

export default Home;