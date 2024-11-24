import { IconType } from "react-icons"
import { Location } from "react-router-dom"

const AdminSidebar = () => {
  return (
    <aside>
       <h2>Logo</h2> 
       <div>
        <h5>Dashboard</h5>
        <ul>
            <li></li>
        </ul>
       </div>
    </aside>
  )
}

interface LiProps {url:string, text:string, location: Location, icon:IconType}
const Li = ({url, location, icon, text}: LiProps) => {
    return(
        <li>
        </li>
    )
}
export default AdminSidebar