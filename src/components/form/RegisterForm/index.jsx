import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { InputSelect } from "../InputSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import Logo from "../../../assets/Logo.svg";
import style from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";


export const RegisterForm = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });


  const onSubmit = (formData) => {
    registerUser(formData);
  };

 

  return (
    <main className={style.register__containner}>
      <div className={style.header__containner}>
        <img src={Logo} alt="kenzie-hub logo" />
        <Link to="/">
          <button className={style.header__btn}>Voltar</button>
        </Link>
      </div>
      <form
        className={style.form__containner}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={style.form__div}>
          <h1 className={style.div_title}>Crie sua conta</h1>
          <p className={style.div_paragraph}>Rapido e grátis, vamos nessa</p>
        </div>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          error={errors.name}
          {...register("name")}
        />
        <Input
          label="Email"
          type="text"
          placeholder="Digite aqui seu email"
          error={errors.email}
          {...register("email")}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          error={errors.password}
          {...register("password")}
        />
        <Input
          label="Confirmar Senha"
          type="password"
          placeholder="Digite novamente sua senha"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />
        <Input
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          error={errors.bio}
          {...register("bio")}
        />
        <Input
          label="Contato"
          type="text"
          placeholder="Opção de contato"
          error={errors.contact}
          {...register("contact")}
        />
        <InputSelect
          label="Selecionar módulo"
          error={errors.course_module}
          {...register("course_module")}
        />

        <div>
          <button className={style.register__btn} type="submit">
            Cadastre-se
          </button>
        </div>
      </form>
    </main>
  );
};
