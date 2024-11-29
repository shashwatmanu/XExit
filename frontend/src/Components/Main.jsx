/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { enqueueSnackbar } from "notistack";
import verifyIfAuthenticated from "../helpers/isAuthenticated";
import { Loader } from "./Loader";
import { Navbar } from "./Navbar";

export default function Main({
  adminView: AdminView,
  employeeView: EmployeeView,
}) {
  const navigate = useNavigate();
  const [userRoles, setUserRoles] = useState({});

  // Function to handle authentication and role setting
  const authenticateUser = async () => {
    try {
      const { isAuthenticated, roles } = await verifyIfAuthenticated();
      if (!isAuthenticated) {
        navigate("/login");
      } else {
        setUserRoles(roles);
      }
    } catch (error) {
      console.error("Authentication failed:", error);
	  enqueueSnackbar(`Authentication failed: ${error?.message}`, { variant: "error" });
      navigate("/login");
    }
  };

  useEffect(() => {
    authenticateUser();
  }, [navigate]);

  // Show loader until roles are determined
  if (!userRoles.admin && !userRoles.employee) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      {userRoles.admin ? <AdminView /> : <EmployeeView />}
    </>
  );
}
