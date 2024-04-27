import { Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
import { Register } from "../../pages/Register";
import { Login } from "../../pages/LoginPage";
import { PrivateRoutes } from "../PrivateRoutes";
import { PublicRoutes } from "../PublicRoutes";

export const RouterMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
