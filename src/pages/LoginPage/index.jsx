import { LoginForm } from "../../components/form/LoginForm";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss";

export const Login = ({ setUser }) => {
  return (
    <>
      <main className={style.login__containner}>
        <div>
          <img src={Logo} alt="Kenzie-hub" className={style.login__img} />
        </div>
        <LoginForm setUser={setUser} />

      </main>
    </>
  );
};
