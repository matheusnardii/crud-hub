import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user, userTech, setUserTech, getUser } = useContext(UserContext);
  const [editTech, setEditTech] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const token = localStorage.getItem("@TOKEN");

  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  const createTech = async ({ title, status }, reset) => {
    try {
      const newTech = { title, status };

      const { data } = await api.post("/users/techs", newTech, authHeader);

      reset();
      setUserTech([...userTech, data]);
      toast.success("Tecnologia criada com sucesso!");
    } catch (error) {
      toast.error("Ops!! Algo deu errado.");
      console.log(error);
    }
  };

  const deleteTech = async (techId) => {
    try {
      await api.delete(`/users/techs/${techId}`, authHeader);

      getUser();
      toast.warn("Tecnologia removida com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ops...algo errado aconteceu.");
    }
  };

  const selectTechEdit = (tech) => {
    setEditTech(tech);
  };

  const updateTech = async (formData, reset) => {
    try {
      const newUpdatedTech = { ...editTech, ...formData };

      const { data } = await api.put(
        `/users/techs/${newUpdatedTech.id}`,
        newUpdatedTech,
        authHeader
      );

      const newTech = userTech.map((tech) =>
        tech.id === newUpdatedTech.id ? data : tech
      );

      reset();
      setEditTech(null);
      setUserTech(newTech);
      toast.success("Tecnologia editada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Opss...Algo de errado aconteceu.");
    }
  };

  return (
    <TechContext.Provider
      value={{
        isOpen,
        setIsOpen,
        createTech,
        openEdit,
        setOpenEdit,
        deleteTech,
        selectTechEdit,
        updateTech,
        editTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
