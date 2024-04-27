import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { loginFormSchema } from "./loginForm.schema";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
  
  const { setUser , loginUser } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });


  const onSubmit = (formData) => {
    loginUser(formData);
  };



  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={style.form__containner}
      >
        <h1 className={style.form__login}>Login</h1>
        <Input
          label="Email"
          type="text"
          placeholder="Digite aqui seu email"
          error={errors.email}
          {...register("email")}
        />
        <div className={style.div__icon}>
          <Input
            label="Senha"
            type={showPassword ? "text" : "password"}
            placeholder="Digite aqui sua senha"
            error={errors.password}
            {...register("password")}
          />
            {showPassword ? (
              <FaRegEyeSlash className={style.icon} onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <FaRegEye  className={style.icon} onClick={() => setShowPassword(!showPassword)} />
            )}
        </div>
        <div>
          <button className={style.btn__login} type="submit">
            Entrar
          </button>
        </div>
        <div className={style.login_footer}>
          <p className={style.login__paragraph}>Ainda não possui uma conta?</p>
          <Link to="/register">
            <button className={style.btn__footer}>Cadastre-se</button>
          </Link>
        </div>
      </form>
    </>
  );
};
