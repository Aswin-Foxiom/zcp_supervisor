import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import apiCall from "./APICall";

export const ContextDatas = createContext();

const Context = ({ children }) => {
  const [User, setUser] = useState(
    localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null
  );

  const [Profile, setProfile] = useState(null);

  useEffect(() => {
    if (User) {
      getProfile();
    }
  }, [User]);

  const getProfile = async () => {
    if (User) {
      const response = await apiCall("get", `/supervisor`, null, {
        auth: User?.authId,
      });
      if (response?.status) {
        setProfile(response?.data?.docs[0] ?? null);
      }
    }
  };

  const [urlPath, seturlPath] = useState(window.location.pathname ?? "/");

  return (
    <ContextDatas.Provider
      value={{
        User,
        setUser,
        urlPath,
        seturlPath,
        Profile,
      }}
    >
      {children}
    </ContextDatas.Provider>
  );
};

export default Context;
