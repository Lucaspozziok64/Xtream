import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({ adminUser }) => {
  if (!adminUser) {
    return <Navigate to={"/"}></Navigate>;
  }
   return <Outlet></Outlet>;
};

export default ProtectorAdmin;
