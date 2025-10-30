import { createContext, useEffect, useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isLoggedInUser, setIsLoggedInUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkLoggedInUser = async () => {
    try {
      let response = await AxiosInstance.get("/user/me");
      console.log(response);
      setIsLoggedInUser(response.data.success);
      console.log(response.data.success);
      setIsLoading(false);
    } catch (error) {
      setIsLoggedInUser(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkLoggedInUser();
  }, []);

  console.log(isLoggedInUser);

  return (
    <AuthContext.Provider
      value={{ isLoggedInUser, setIsLoggedInUser, checkLoggedInUser ,isLoading}}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
