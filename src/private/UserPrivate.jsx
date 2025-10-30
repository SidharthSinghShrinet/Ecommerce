import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

const UserPrivate = (props) => {
  let { isLoggedInUser, checkLoggedInUser ,isLoading } = useContext(AuthContext);

  useEffect(() => {
    checkLoggedInUser();
  }, [isLoggedInUser]);

  if (isLoading) {
    return <CircularProgress />
  }

  return isLoggedInUser ? props.children : <Navigate to={"/"} />;
};

export default UserPrivate;
