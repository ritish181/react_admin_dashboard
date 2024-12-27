import { FaRegBell, FaSearch } from "react-icons/fa"
import AdminSidebar from "../components/AdminSidebar"
import userPic from '../assets/userpic.png'
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"
import data from '../assets/data.json';
import { BarChart, DoughnutChart } from "../components/Charts";

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
                percent={60} 
                heading="Users" 
                value={23300} 
                color="rgb(142, 248, 163)"
              />
              <WidgetItem 
                percent={20} 
                amount={true} 
                heading="Revenue" 
                value={5994090} 
                color="rgb(0,155,255)"
              />
              <WidgetItem 
                percent={-40}
                amount ={true}
                heading="P&L" 
                value={14090} 
                color="rgb(255,10,50)"
              />
              <WidgetItem 
                percent={35}
                heading="Products" 
                value={6090} 
                color="rgb(215,100,150)"
              />
            </section>
            <section className="graphContainer">
              <div 
                className="revenueChart"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h3>Revenue & Transaction</h3>
                  <BarChart 
                    key={1}
                    title1="Revenue"
                    title2="Transaction"
                    data1={[100,200,300,600, 550, 430, 312]}
                    data2={[300,400,100, 533, 255, 662, 222]}
                    bgColor1="rgb(245, 105, 145)"
                    bgColor2="rgb(50, 45, 125)"
                  />
              </div>
              <div className="dashboardCategories"> 
                <h3>Inventory</h3>
                <div>
                  {/* categories */}
                  {data.categories.map((i) => (
                    <Categories
                      key = {i.heading}
                      heading={i.heading}
                      value={i.value}
                      color={`hsl(${i.value*4}, ${i.value}%, 50%)`}
                    />
                  ))}
                </div>
              </div>
            </section>
            <section className="transactionContainer">
                  <div className="doughnutChart">
                    <h3>GENDER RATIO</h3>
                    <DoughnutChart
                      title1="Female"
                      title2="Male"
                      value1={40}
                      value2={60}
                      color1='rgba(255, 99, 132, 1)'
                      color2='rgba(54, 162, 235, 1)'
                    />
                  </div>
                  <div className="tableChart">
                    <h3>TOP TRANSACTIONS</h3>
                  </div>
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

const WidgetItem = ({heading, value, percent, color, amount= false}: WidgetProps) => {
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
    <div className="widgetCircle" style={{
      background: `conic-gradient(
        ${color} ${Math.abs(percent*3.6)}deg,
        rgba(10, 10, 10, 0.05) 0
      )`,
    }}>
      <span style={{color}} > {percent}%</span>
    </div>
  </article>)
}

interface CategoryProps{
  heading: string;
  color: string;
  value: number;
}

const Categories = ({heading, color, value}: CategoryProps) => {
  return (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{backgroundColor: color, width: `${value}%`}}></div>
    </div>
    <span>{value}%</span>
  </div>)
}

export default Dashboard