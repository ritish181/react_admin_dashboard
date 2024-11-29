import { FaChartArea, FaSearch, FaUser } from "react-icons/fa"
import AdminSidebar from "../components/AdminSidebar"

const Dashboard = () => {
  return (
    <div className="adminContainer">
        <AdminSidebar />
        <main className="dashboard" >
            <div className="bar">
              <FaSearch />
              hello
              <FaUser />
            </div>
        </main>
    </div>
  )
}

export default Dashboard