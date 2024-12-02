import { FaRegBell, FaSearch } from "react-icons/fa"
import AdminSidebar from "../components/AdminSidebar"
import userPic from '../assets/userpic.png'
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"

const Dashboard = () => {
  return (
    <div className="adminContainer">
        <AdminSidebar />
        <main className="dashboard" >
            <div className="bar">
              <FaSearch />
              <input type="text" placeholder="Search for data, users, docs" />
              <FaRegBell />
              <img src={userPic} alt="User image" />
            </div> 
            <section className="widgetContainer" >
              <WidgetItem 
                percent={40} 
                amount={true} 
                heading="GDP" 
                value={5994090} 
                color="rgb(0,155,255)"
              />
              <WidgetItem 
                percent={40} 
                amount={true} 
                heading="GDP" 
                value={5994090} 
                color="rgb(0,155,255)"
              />
              <WidgetItem 
                percent={40} 
                amount={true} 
                heading="GDP" 
                value={5994090} 
                color="rgb(0,155,255)"
              />
              <WidgetItem 
                percent={40} 
                amount={true} 
                heading="GDP" 
                value={5994090} 
                color="rgb(0,155,255)"
              />
            </section>
        </main>
    </div>
  )
}

interface WidgetProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({heading, value, percent, color, amount}: WidgetProps) => {
  return (<article className="widget" >
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value }</h4>
      {
        percent>0 
        ? (<span className="green" > <HiTrendingUp />+{percent}% </span>) 
        : (<span className="red" > <HiTrendingDown /> {percent}% </span>)
      }
      
    </div>
    <div className="widgetCircle">
      <span color={color} > {percent}%</span>
    </div>
  </article>)
}


export default Dashboard