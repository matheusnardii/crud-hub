import { useContext } from "react";
import Logo from "../../assets/Logo.svg"
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <>
      <header className={style.header__container}>
        <img src={Logo} alt="logo" />
        <button onClick={userLogout}>Sair</button>
      </header>
    </>
  );
};
