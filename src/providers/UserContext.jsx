import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userTech, setUserTech] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("@TOKEN");

  const loginUser = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      setUserTech(data.user.techs);
      localStorage.setItem("@TOKEN", data.token);
      navigate("/home");
    } catch (error) {
      toast.error("Credenciais inválidas");
    }
  };

  useEffect(() => {
    const autoLogin = async () => {
      try {
        const { data } = await api.get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
        setUserTech(data.techs);
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      autoLogin();
    }
  }, []);

  const getUser = async () => {
    try {
      const { data } = await api.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(data);
      setUserTech(data.techs);
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        registerUser,
        userLogout,
        userTech,
        setUserTech,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
