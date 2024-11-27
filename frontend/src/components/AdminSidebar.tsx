import React from "react"
import { IconType } from "react-icons"
import { AiFillFileText } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri"
import { Link, Location, useLocation } from "react-router-dom"

const AdminSidebar = () => {

  const location= useLocation()

  return (
    <aside>
      <h2>Logo</h2> 
      <DivOne location={location} /> 
      <DivTwo location={location} />
      <DivThree location={location} />
    </aside>
  )
}

const DivOne = ({location}:{location:Location}) => (
  <div>
        <h5>Dashboard</h5>
        <ul>
            <Li
              url="/admin/dashboard" 
              text="Dashboard" 
              location={location} 
              Icon={RiDashboardFill}
              classname="li-wrapper">
            </Li>
            <Li 
              url="/admin/products" 
              text="Product" 
              location={location} 
              Icon={RiShoppingBag3Fill}
              classname="li-wrapper">
            </Li>
            <Li 
              url="/admin/customers" 
              text="Customer" 
              location={location} 
              Icon={IoIosPeople}
              classname="li-wrapper">
            </Li>
            <Li 
              url="/admin/transaction" 
              text="Transaction" 
              location={location} 
              Icon={AiFillFileText}
              classname="li-wrapper">
            </Li>
        </ul>
       </div>
)

const DivTwo = ({location}:{location:Location}) => (
  <div>
        <h5>Charts</h5>
        <ul>
            <Li
              url="/admin/dashboard" 
              text="Dashboard" 
              location={location} 
              Icon={RiDashboardFill}
              classname="li-wrapper">
            </Li>
            <Li 
              url="/admin/products" 
              text="Product" 
              location={location} 
              Icon={RiShoppingBag3Fill}
              classname="li-wrapper">
            </Li>
            <Li 
              url="/admin/customers" 
              text="Customer" 
              location={location} 
              Icon={IoIosPeople}
              classname="li-wrapper">
            </Li>
            <Li 
              url="/admin/transaction" 
              text="Transaction" 
              location={location} 
              Icon={AiFillFileText}
              classname="li-wrapper">
            </Li>
        </ul>
       </div>
)

const DivThree = ({location}:{location:Location}) => (
  <div>
        <h5>Charts</h5>
        <ul>
            <Li
              url="/admin/dashboard" 
              text="Dashboard" 
              location={location} 
              Icon={RiDashboardFill}
              classname="li-wrapper">
            </Li>
            <Li 
              url="/admin/products" 
              text="Product" 
              location={location} 
              Icon={RiShoppingBag3Fill}
              classname="li-wrapper">
            </Li>
            <Li 
              url="/admin/customers" 
              text="Customer" 
              location={location} 
              Icon={IoIosPeople}
              classname="li-wrapper">
            </Li>
            <Li 
              url="/admin/transaction" 
              text="Transaction" 
              location={location} 
              Icon={AiFillFileText}
              classname="li-wrapper">
            </Li>
        </ul>
       </div>
)

interface LiProps {
  url:string, 
  text:string, 
  location: Location, 
  Icon:IconType,
  classname: string
};

const Li: React.FC<LiProps> = ({url, text, location, Icon, classname}) => {
  return(
    <Link style={{
      backgroundColor: location.pathname.includes(url) ? "rgba(0,115,255,0.1)" : "white",
    }} 
    className={classname} to={url}><Icon /> {text}</Link>
  )
}

export default AdminSidebar